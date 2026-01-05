# Enforcing Security Best Practices in Git Repository

## Introduction

In this task, I secured my Git repository to protect sensitive code, prevent unauthorized changes, and ensure that every modification can be **tracked, verified, and audited**. Because the project involves a distributed team, I implemented security controls that enforce **authentication, authorization, integrity, and accountability**.

I carried out this task in a clear sequence, starting from repository access control and ending with full auditability.

---

## Configuration 1: Create and Secure the Repository

I first created the GitHub repository that would host the codebase. This repository became the single source of truth for the project.

After creating the repository, I immediately reviewed the **repository settings** to ensure that:

* Only authorized users could access it
* No one could modify critical branches without approval

This step established a secure foundation before any code was added.

---

## Configuration 2: Configure User Access Controls

To prevent unauthorized access, I set up **role-based permissions**.

### What I did

1. Opened **Repository Settings → Collaborators**
2. Added team members
3. Assigned appropriate roles:

   * **Admin** – myself and trusted maintainers
   * **Write** – developers contributing features
   * **Read** – stakeholders who only needed visibility

### Why this matters

* Prevents accidental or malicious changes
* Ensures accountability
* Limits who can change repository settings

![screenshot](../Images/TASK(4)-4.png)

---

## Configuration 3: Enforce Secure Authentication Using SSH Keys

To remove the risk of password-based authentication, I enforced **SSH key authentication**.

### Generate SSH Keys (Per User)

```bash
ssh-keygen -t ed25519 -C "noblejoshua12@gmail.com"
```

I accepted the default file location and secured the key with a passphrase.

---

### Add SSH Key to GitHub

```bash
cat ~/.ssh/id_ed25519.pub
```

I copied the output and added it in:
**GitHub → Settings → SSH and GPG Keys → New SSH Key**

### Outcome

* All Git operations are encrypted
* Unauthorized access using stolen passwords is prevented

---

## Configuration 4: Disable Risky Actions on the Main Branch (Branch Protection)

To protect production code, I enforced **branch protection rules** on the `master` branch.

### Enable Branch Protection

1. Opened **Repository Settings → Branches**
2. Added a protection rule for `master`

### Rules I Enabled

* Require pull requests before merging
* Require at least one approving review
* Require all CI checks to pass
* Block direct pushes to `master`
* Disable force pushes
* Prevent branch deletion

### Why this is critical:

* No one can bypass reviews
* Broken or insecure code cannot reach production
* The `master` branch remains stable and trusted

---

## Configuration 5: Enforce Signed Commits for Code Integrity

To ensure that every commit is verifiably authored, I enforced **signed commits**.

---

### Generate a GPG Key

```bash
gpg --full-generate-key
```

I selected:

* RSA and RSA
* 4096 bits
* My GitHub email address

![screenshot](../Images/TASK(4)-1.png)

---

### List and Export GPG Key

```bash
gpg --list-secret-keys --keyid-format=long
```

```bash
gpg --armor --export <KEY_ID>
```

I added the exported key to:
**GitHub → Settings → SSH and GPG Keys**

![screenshot](../Images/TASK(4)-2.png)
![screenshot](../Images/TASK(4)-3.png)

---

### Configure Git to Always Sign Commits

```bash
git config --global user.signingkey <KEY_ID>
git config --global commit.gpgsign true
```

From this point onward, every commit I made was signed:

```bash
git commit -m "Secure authentication implementation"
```

GitHub verified each commit with a **Verified** badge.

---

## Configuration 6: Enforce Pull Requests as the Only Entry Point

To ensure all changes were reviewed and audited, I enforced **pull requests** as the only way to modify protected branches.

### What I enforced:

* No direct pushes to `master`
* Mandatory PR reviews
* CI checks must pass before merge

This ensured human review + automated verification for every change.

---

## Configuration 7: Integrate CI for Security Validation

I integrated CI checks to automatically run on every pull request.

CI was used to:

* Run tests
* Validate code quality
* Block insecure or broken changes

Pull requests could not be merged unless all checks passed.

---

## Configuration 8: Enable Full Auditability and Change Tracking

To ensure complete traceability, I relied on multiple auditing mechanisms.

---

### Git Commit History

```bash
git log
```

Each commit records:

* Author identity
* Timestamp
* Commit message
* Cryptographic signature

![screenshot](../Images/TASK(4)-5.png)

---

### Pull Request History

Every pull request maintains:

* Who created it
* Who reviewed and approved it
* CI results
* Discussion history

This creates a permanent and verifiable audit trail.

---

### GitHub Security and Activity Logs

I used GitHub’s activity logs to monitor:

* Repository access
* Changes to settings
* Merges and deletions

---

## Final Security Best Practices I Enforced

* Role-based access control
* SSH-only authentication
* Protected production branches
* Mandatory pull requests
* Signed commits
* Automated CI checks
* Complete audit trail

---

## How This Solved the Security Problem

By following these steps:

* Unauthorized users cannot access the repository
* No code can be merged without review and verification
* Every change is traceable to a verified author
* The integrity of the codebase is preserved
* The repository remains secure in a distributed team environment

---

## Conclusion

By systematically applying access control, authentication, branch protection, commit signing, CI enforcement, and auditing, I fully secured the Git repository. This setup ensures **confidentiality, integrity, accountability, and traceability**, aligning with industry-standard DevSecOps practices.

---
