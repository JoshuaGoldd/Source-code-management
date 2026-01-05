# Git Workflow Implementation for a Team Project

## Introduction

In this task, I implemented a **Git workflow** to support a team developing a web application where multiple developers work on different features at the same time. My primary objective was to ensure that the `main/master` branch remains **stable and production-ready**, while still allowing continuous development and collaboration across a distributed team.

To achieve this, I designed and applied a workflow based on **feature branching, pull requests for code reviews, and integration testing before merging**.

---

## Branching Strategy I Used

I structured the repository using clearly defined branches, each with a specific purpose. This helped prevent conflicts and ensured smooth collaboration.

### Main/Master Branches

| Branch    | Purpose                                                 |
| --------- | ------------------------------------------------------- |
| `main/master` | Contains production-ready code only |
| `develop` | Serves as the integration branch for completed features |

I ensured that **no direct commits** were made to the `main/master` branch. All changes were introduced through pull requests after testing and review.

---

### Supporting Branches

| Branch Type    | Naming Convention        | Purpose                             |
| -------------- | ------------------------ | ----------------------------------- |
| Feature Branch | `feature/<feature-name>` | Used for developing new features    |
| Bugfix Branch  | `bugfix/<issue-name>`    | Used to fix non-critical issues     |
| Release Branch | `release/<version>`      | Used to prepare production releases |
| Hotfix Branch  | `hotfix/<issue-name>`    | Used for urgent production fixes    |

This structure allowed multiple developers to work independently without disrupting the main codebase.

---

## Feature Development Workflow I Followed

### Creating a Feature Branch

Whenever I started working on a new feature, I created a feature branch from `develop`:

```bash
git checkout develop
git pull origin develop
git checkout -b feature/login-page
```

This ensured that my work was based on the most recent integrated code.

![screenshot](../Images/TASK(2)-1.png)
![sreenshot](../Images/TASK(2)-2.png)

---

### Committing Changes

As I developed features, I committed changes frequently with clear and meaningful messages:

```bash
git add .
git commit -m "Add login page form validation"
```

This made the commit history easy to understand and review.

---

### Pushing Feature Branches

Once a feature was ready for review, I pushed the branch to GitHub:

```bash
git push origin feature/login-page
```

---

## Pull Requests and Code Review Process

To merge my work, I created a **pull request** from the feature branch into `develop`.

During this process:

* I added a clear description of the changes
* I requested reviews from team members
* I addressed comments and feedback before merging

I relied on automated **CI checks** to run unit tests, integration tests, and linting. If any check failed, the pull request was not merged.

This ensured that only tested and reviewed code entered the integration branch.

![screenshot](../Images/TASK(2)-3.png)
![alt text](../Images/TASK(2)-4.png)

---

## Integration Testing Before Merging

Before merging any feature, I ensured that:

* Automated tests passed successfully
* New features worked correctly with existing code
* There were no conflicts or regressions

This step helped catch issues early and prevented unstable code from reaching the `master` branch.

---

## Keeping Feature Branches Updated

While working on long-running features, I kept my branch up to date with `develop`.

### Using Rebase (Preferred)

```bash
git checkout feature/login-page
git fetch origin
git rebase origin/develop
```

If conflicts occurred, I resolved them and continued the rebase:

```bash
git add .
git rebase --continue
git push origin feature/login-page --force
```

Rebasing allowed me to maintain a clean and linear commit history.

![screenshot](../Images/TASK(2)-6.png)
![screenshot](../Images/TASK(2)-7.png)

---

## Preparing Code for Production

Once all features were integrated and tested, I created a **release/v1.0.0 branch**:

```bash
git checkout develop
git pull origin develop
git checkout -b release/v1.0.0
```

I used this branch for final testing and minor fixes.

After validation, I merged the release branch into `master` and tagged the release:

```bash
git checkout master
git merge release/v1.0.0
git tag -a v1.0.0 -m "Release version 1.0.0"
git push origin master --tags
```

To keep branches aligned, I also merged the release branch back into `develop`:

```bash
git checkout develop
git merge release/v1.0.0
git push origin develop
```

![screenshot](../Images/TASK(2)-7.png)

![screenshot](../Images/TASK(2)-8.png)

---

## Handling Hotfixes

When urgent issues occurred in production, I created a hotfix branch directly from `main`:

```bash
git checkout main
git pull origin main
git checkout -b hotfix/critical-bug
```

After fixing the issue, I merged it back into both `main` and `develop` to maintain consistency.

---

## Best Practices I Enforced

* I never committed directly to `master`
* I used feature branches for all development work
* I required pull requests for all merges
* I ensured automated tests passed before merging
* I kept branches updated through rebasing or merging
* I kept pull requests small and focused
* I encouraged clear commit messages and peer reviews

---

## How This Workflow Supported Team Collaboration

This workflow allowed:

* Multiple developers to work in parallel without conflicts
* Code reviews to improve quality and shared understanding
* Automated testing to catch issues early
* A stable `main/master` branch at all times
* Smooth collaboration across a distributed team

By isolating work into feature branches and enforcing reviews and testing, I ensured that collaboration remained structured, predictable, and efficient.

---

## Conclusion

By implementing this Git workflow, I successfully created a development process that balances **speed, quality, and stability**. The workflow supports parallel development, enforces code quality through reviews and testing, and ensures that production code remains reliable. This approach reflects industry best practices and is well-suited for distributed team environments.
