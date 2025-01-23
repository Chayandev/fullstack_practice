# **Today's Learning: Git and GitHub Revision**

---

## 1. **Introduction to Git**

Git is a distributed version control system (VCS) that helps developers track changes to their codebase over time. It enables collaboration, history tracking, and reverting changes when necessary.

**Key Features:**
- Tracks every modification to your files.
- Facilitates collaboration among multiple developers.
- Enables easy rollback to previous states of the codebase.

Unlike centralized VCS, Git allows every developer to have a complete copy of the repository locally.

---

## 2. **Initializing Git in a Directory**

To start tracking files with Git, initialize a Git repository in your directory by running:

```bash
git init
```

### After Initialization:
- The directory becomes a Git repository.
- Files inside the directory are untracked by default.
- Git creates a `.git` folder to store metadata and version history.

---

## 3. **Tracking Files in Git**

### Untracked Files:
When a file is created, Git initially marks it as untracked (shown with a **U** symbol in tools or via `git status`).

### Adding Files for Tracking:
To stage files for tracking:

```bash
git add <file_path>   # To stage a specific file
git add .             # To stage all changes in the directory
```

### Key Notes:
- Each time you modify a file, you need to run `git add` again to stage the updated changes.
- Staging prepares files for committing.

---

## 4. **Committing Changes**

A **commit** is a snapshot of staged changes in Git, representing a specific point in the project's history.

### Command to Commit Changes:
```bash
git commit -m "Commit message describing the changes"
```

### Key Points:
- Every commit has a unique identifier (SHA hash).
- Commits create a linked history where the **HEAD** pointer points to the latest commit.

---

## 5. **Undoing Changes**

### **Revert:**
- `git revert` creates a new commit that negates the changes introduced by a previous commit.
- **Use Case:** Safe for collaborative environments as history is preserved.

**Example:**
```bash
git revert <commit_hash>
```

### **Reset:**
- `git reset` moves the **HEAD** pointer to a previous commit, effectively rewriting history.

**Types of Reset:**
- `--soft`: Keeps changes staged.
- `--mixed`: Keeps changes in the working directory but unstaged.
- `--hard`: Discards all changes permanently.

**Example:**
```bash
git reset --hard <commit_hash>
```

> **Caution:** Resetting can result in permanent loss of commits.

---

## 6. **Checking the Status and History**

### Check File Status:
```bash
git status
```
- Displays the status of files (untracked, modified, or staged).

### View Commit History:
```bash
git log              # Full commit history
git log --oneline    # Condensed, one-line history
```

---

## 7. **Viewing Changes**

To view changes made to files:
```bash
git diff
```
- Shows line-by-line differences between the working directory and the last commit.

---

## 8. **Introduction to GitHub**

GitHub is a remote repository hosting platform that extends Git's functionality by:
- Hosting repositories online.
- Enabling collaboration through pull requests, issues, and discussions.
- Providing version history, even across multiple collaborators.

---

## 9. **Branching**

### **What is Branching?**
A branch is a parallel version of your project, allowing developers to work on features or bug fixes independently of the main codebase.

### Key Commands for Branching:
- **Create a New Branch:**
  ```bash
  git branch <branch_name>
  ```
- **Switch to a Branch:**
  ```bash
  git checkout <branch_name>  # Older command
  git switch <branch_name>    # Newer command
  ```

### **Merging Branches:**
- **Merge:** Combines changes from one branch into another.
  ```bash
  git merge <branch_name>
  ```
  - Merges all commits into the target branch.

- **Rebase:** Re-applies commits from one branch onto another in a linear fashion.
  ```bash
  git rebase <branch_name>
  ```
  - **Use Case:** Keeps history clean but rewrites commit history. Use cautiously.

---

## 10. **Stashing**

### **What is Stashing?**
Stashing temporarily saves uncommitted changes so you can work on something else (e.g., pull remote changes) without losing your current progress.

### Key Commands:
- Save changes to the stash:
  ```bash
  git stash
  ```
- View the stash list:
  ```bash
  git stash list
  ```
- Apply stashed changes:
  ```bash
  git stash apply
  ```
- Remove applied stash from the stack:
  ```bash
  git stash drop
  ```

### **Common Stashing Issue:**
- If you attempt to `git pull` while having uncommitted changes, Git will prevent you from pulling changes. Use stashing to resolve this:
  1. Stash your changes (`git stash`).
  2. Pull the remote changes (`git pull`).
  3. Reapply your stashed changes (`git stash apply`).

---

## 11. **Pulling and Pushing Changes**

### Pull:
Fetch and integrate changes from the remote repository into your local repository:
```bash
git pull
```

### Push:
Upload your local commits to the remote repository:
```bash
git push
```

---

## 12. **Summary of Key Git Commands**

| **Command**    | **Purpose**                                          |
|----------------|------------------------------------------------------|
| `git init`     | Initialize a Git repository.                        |
| `git add`      | Stage files for commit.                             |
| `git commit`   | Create a snapshot of staged changes.                |
| `git status`   | View the status of files in the repository.         |
| `git log`      | View commit history.                                |
| `git diff`     | View changes between working directory and commits. |
| `git branch`   | Manage branches.                                    |
| `git merge`    | Merge branches.                                     |
| `git stash`    | Temporarily save uncommitted changes.               |
| `git pull`     | Fetch and merge changes from the remote repo.       |
| `git push`     | Push local commits to the remote repository.        |

---

## 13. **Additional Concepts**

### **Git Clone:**
Clone a remote repository to your local machine:
```bash
git clone <repository_url>
```

### **Conflict Resolution:**
Occurs when merging branches or pulling changes with conflicting modifications. Git highlights conflicts in files, and you must manually resolve them.

### **Git Ignore:**
Prevent certain files or directories from being tracked by adding their paths to a `.gitignore` file.

---

## **Key Takeaways**

- Git is a powerful version control tool, and GitHub enhances collaboration and code sharing.
- Understand and practice the staging, committing, and branching workflows.
- Use `git revert` for safe undoing and `git reset` with caution.
- Familiarity with key commands and workflows will improve productivity and collaboration.
- Always commit or stash changes before pulling remote updates to avoid conflicts or loss of work.

