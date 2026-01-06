
# Handling a Real-World Git Merge Conflict and Preventing Future Issues

## Introduction

During development, i developed working on separate branches accidentally introduced **conflicting changes** that affected the same part of the codebase. A merge attempt into the `master` branch failed due to these conflicts. My task was to **resolve the conflict safely**, ensure the integrity of the code, and then **update the team’s Git workflow** to prevent similar issues in the future.

I handled this issue in a structured and traceable manner.

---

## Step 1: Pull the Latest Code from the Main/Master Branch from repository

Before attempting to resolve the conflict, I ensured that my local repository reflected the current state of the remote `master` branch.

```bash
git checkout master
git pull origin master
```

This guaranteed that I was working with the most recent version of the code.

I added a txt file which i named **Authentication & updated.txt** file with some text contain to my list of files after pulling from the github master branch

---

## Step 2: Identify the Conflicting Branches

I created the two branches that introduced the conflicting changes named:

* `feature/authentication`
* `feature/user-profile`

Both branches modified the same file named **Authentication & updated** in different ways, which caused the merge conflict.
I add a line statement to each of the Authentication & updated.txt on each branch just to mark the change
I add,commited and pushed all my changes in each branches created

![screenshot](../Images/TASK(5)-1.png)

---

## Step 3: Attempt the Merge and Detect the Conflict

I attempted to merge the two feature branches into `master`:

```bash
git merge --squash feature/authentication
git add .
git commit -m "Save local changes before merge"
git merge --squash feature/user-profile
```

Git reported a merge conflict and stopped the merge process.

I confirmed the conflict status:

```bash
git status
```

Git clearly listed the files with conflicts.

![screenshot](../Images/TASK(5)-2.png)

---

## Step 4: Locate and Inspect the Conflicting Files

I opened the conflicted file(s) and located Git’s conflict markers.
These markers helped me understand:

* What code existed in `master`
* What code was introduced by the feature branch

---

## Step 5: Resolve the Merge Conflict Manually

I carefully reviewed both changes and combined them logically to preserve functionality from both developers.

After resolving the conflict, I removed all conflict markers and ensured the code compiled and functioned correctly.

![screenshot](../Images/TASK(5)-3.png)

---

## Step 6: Mark the Conflict as Resolved

Once the conflict was fixed, I staged the resolved files:

```bash
git add .
```

I then completed the merge:

```bash
git commit -m "resolved conflicts on merging feature/authentication and feature/user-profile txt file"
```

This created a clean merge commit.

---

## Step 7: Verify Code Integrity

Before pushing the changes, I ran tests locally to ensure nothing was broken:

```bash
npm test
```

I also verified linting:

```bash
npm run lint
```

This ensured that the resolved code met quality standards.

---

## Step 8: Push the Resolved Code to Remote Repository

After confirming everything worked correctly, I pushed the updated `master` branch:

```bash
git push origin master
```

This finalized the conflict resolution.

---

## Step 9: Updating the Team’s Git Workflow to Prevent Future Conflicts

After resolving the issue, I improved the team workflow to reduce the likelihood of similar conflicts.

### Measures I Introduced

#### 1. Smaller and More Frequent Pull Requests

* Developers are encouraged to submit small, focused pull requests
* Reduces conflict scope and simplifies reviews

#### 2. Frequent Branch Synchronization

```bash
git pull origin develop
```

or

```bash
git rebase origin/develop
```

This keeps feature branches up to date.

---

#### 3. Mandatory Pull Requests to Main/Master

* No direct merges into `main/master`
* All changes must go through `develop`for safety
* CI checks must pass before merging

---

#### 4. Improved Communication

* Developers announce major file changes in team channels
* Conflicting areas are discussed early

---

#### 5. Integration Testing Before Merging

* CI runs integration tests on pull requests
* Prevents incompatible features from being merged

---

## From this task, I learned that

* Merge conflicts are manageable with a structured approach
* Early integration reduces conflict risk
* Clear communication is just as important as technical controls

---

## Conclusion

By carefully pulling the latest code, identifying conflicting files, resolving conflicts manually, and verifying the solution through testing, I successfully restored code integrity. I then strengthened the team’s Git workflow by enforcing better communication, smaller pull requests, and regular branch updates. These improvements significantly reduce the risk of future merge conflicts and support smooth collaboration in a distributed development environment.

---
