---
title: "Version Control with Git"
date: 2025-01-23
categories: 
  - "misc"
tags: 
  - "git"
  - "gitlab"
  - "vcs"
  - "version-control"
---

## What is Version Control and Git

Version control - also known as source control or revision control - is an important software development practice for tracking and managing changes made to code and other files.

With version control, every change made to the code base is tracked. This allows software developers to see the entire history of who changed what at any given time — and roll back from the current version to an earlier version if they need to. It also creates a single source of truth. There are several version control systems (VCS's) - git being one of them.

![[images/Collaboration-in-Code-Management-1024x652.jpg]]

The above diagram describes the philosophy of git: sequential changes to the project (commits) act as fixed points on a timeline. For example the first blue circle could represent creating a blank Unity project, the second circle could represent adding a prototype level, and so on.

Each commit is fixed and represents a series of changes to your code. Best practice is to commit as often as you can. You can roll back to (or inspect) any commit you have made in the past - so the more commits you have the more history is available to you when going back through your project.

As you may be able to tell, git also allows you to create different branches within your project. You can imagine them as alternate timelines that may stem from the same commit but will accumulate different changes over time. A good practice is to create a new branch for any major feature (often called a feature branch), especially if it is experimental. This allows you to encapsulate your feature in a separate environment while you are working on it, and then "merge" it back with the main branch when finished. A "feature" may be as simple as importing assets or swapping out a texture.

Branching can also be very useful if you are working in a team where multiple teammates are working on the same project. While you are working on Feature A, your teammate might spot a bug and create a new branch to tackle it.

When you merge branches, git tries to combine files in a way that all of the features from both branches are kept in tact. If this is not possible, git will notify you of a "merge conflict". In this case you either manually review the combined file, or choose to keep the file from one of the two branches.

This guide is still under construction. For assistance on setting up and using version control contact Ross.
