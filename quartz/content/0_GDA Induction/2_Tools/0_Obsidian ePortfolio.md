---
title: Obsidian ePortfolio
author: Ross Popovs
---

> [!NOTE] First Year Only
> This guide applies to first year students only.

# Your ePortfolio
To enable staff to provide feedback on your work and development towards The 7 Proficiencies, you will keep a regularly updated ePortfolio of work to be able to show to staff as you progress. This would be updated once a week as a minimum but likely you will be updating it daily with your reflections and at key point development plans. Staff will want to see this progress and will document feedback into your ePortfolio as text or rich media feedback and advice on how to improve to ensure you are on track. You will have specific moments of direct feedback for development which should also be kept or noted in your ePortfolio, alongside informal staff interactions.

Staff will either provide you text/rich media feedback to add to your ePortfolio or they may ask you to document verbal feedback during a conversation with staff. You may be given additional feedback when talking to staff in their designated drop-in office hours or conversations outside of the studios with your PAT (Mentor).

You will capture your work as an ePortfolio in the free software tool Obsidian. In Obsidian your work is inside what they call a “Vault,” At the start of your study you will be given a Vault template to structure your ePortfolio work, this will divide the portfolio into Weeks.

## Obsidian
Under the cover, your ePortfolio is just a folder filled with other folders and 'Markdown' or '.md' files. These files are quite simple, and allow you to easily organize text, create headings and subheading, or embed files. Fun fact, this guides page is written in Markdown!

Obsidian is a free editor that allows you to easily write and edit these markdown files.
You can download it here: https://obsidian.md/download
## Git and Version Control
You will be using Git to backup your files and create a history of the changes in your portfolio.
This is a practice called Version Control, widely used in industry and will be crucial when you start creating other digital projects.

# Setting up your ePortfolio on your machine


> [!NOTE] Notice
> The following steps can get quite technical. It is important to complete these steps but if you feel lost or are concerned that some things might not be working correctly, please do not hesitate to ask for help!

*Middle-click any links to open them in a new tab*

---

1. Before continuing, make sure that you have downloaded and installed the following software:
	- [Obsidian](https://obsidian.md/download)
	- [Github Desktop](https://desktop.github.com/download/)

---

2. Head to https://git.soton.ac.uk/gamesdesignart
	- Login (top left corner of the page)
	- Login using your university username and password
	- You will now be able to request to join the GDA group on GitLab

---
3. Head to https://git.soton.ac.uk/gamesdesignart/portfolio-template

--- 
4. Click "Fork", you should now see this screen
   ![[Pasted image 20251001205909.png]]
	- Set the project name to `(your username)-portfolio` (eg. rp1y23-portfolio)
	- Set the namespace to `gamesdesignart/portfolio`
	- Update the project slug to match the project name
	- Keep the branches option as "All branches"
	- Set the visibility level to "Private"
	- Then click "Fork Project"
	What did we just do? "Forking" a git project creates your own identical copy that you can add changes to without overwriting the original. You have just created a copy of the template portfolio and renamed it. Unlike the template, this copy is private - meaning that unless you explicitly grant access to others, only you and staff can see that it exists or view its contents.
	You only need to do this forking process once!

---

5. You should now see this screen - this is your own personal portfolio (currently a carbon copy of the template)
	![[Pasted image 20251001210156.png]]
	- You can not edit your portfolio directly on GitLab, instead what we need to do is "clone" your portfolio onto your computer. (In git, "cloning" can be thought as downloading the files)
	- Open up the "Code" dropdown and copy the URL from the "Clone with HTTPS" field

---

6. Now open up the GitHub Desktop app. GitHub Desktop is a free program that allows you to easily "clone" *(download)* git projects onto your computer and manage it. Despite it's name, GitHub Desktop also works with GitLab.
	- You may be asked to sign in to GitHub, skip this stage.
	- When asked to set a signature, set it to your university email address.

---

7. Once you have opened GitHub Desktop, on the program navigate to "File" then "Clone Repository" to open up this screen:
	![[Pasted image 20251001211901.png]]
	- Select the "URL" tab
	- Paste the URL that you copied from GitLab
	- Local Path specifies where on your computer you want to clone the files.
		- If you have OneDrive installed, it is recommended to clone into your university OneDrive folder under Documents
		- Otherwise, select your ordinary "Documents" folder, or somewhere where you will be able to find the files later and would not accidently delete them
	- Click "Clone"

---

8. You will likely see this pop-up show up, do not worry - you haven't done anything wrong!
	![[Pasted image 20251001212222.png]]
	- As you set your portfolio to "Private", GitLab will not allow any software to access your files without authentication.
	- Enter your university username and password and click "Ok".
	- Wait for the cloning to complete

---

9. If you see this, you have done everything correctly up to this point!
	![[Pasted image 20251001212450.png]]
	You have successfully cloned your portfolio onto the computer. We can now open the portfolio in Obsidian and start editing!

---

10. Open the Obsidian program. You should see this window:
	![[Pasted image 20251001212946.png]]
	- You will want to open the files that you downloaded as a folder in Obsidian
	- Click "Open"
	- This part is important:![[Pasted image 20251001213410.png]]
	- Select the **exact folder** of files that you cloned in step 7. 
	![[Pasted image 20251001213522.png]]
	- Click "Trust author and enable plugins"
	- Congratulations - you now have your own personal portfolio that you can edit:
		![[Pasted image 20251001213647.png]]

---

11. Remember that the whole point of using git and GitHub Desktop is that you can save your changes at any point. Lets try this out! As an example, navigate to `Portfolio - Semester One/Week 1/Games Design & Culture - P1`, and make some changes at the bottom!
	![[Pasted image 20251001214221.png]]
	You changes should (hopefully) be more insightful than this.

---

12. Open GitHub Desktop again, you will see a list of all the changes that you made!
	![[Pasted image 20251001214458.png]]
	- You will see a list of ALL the changes to files on the left - there may be more than you expect! Git tracks all of the files in the folder, even ones that you may not see! Sometimes a program can change a number of files in the background, this is ok.
	- Importantly, note the change to the file that we specifically made - you can see the lines that we added in green!

---

13. In the bottom left, write a short summary of the changes that you've made (if you want to explain your changes in more detail, you can also provide a description)
    ![[Pasted image 20251001214931.png]]
	- Your summary and description should (hopefully) be more insightful than this, such as "Completed Week 1 reflection of field trip" or "Added a section based on research."
	- Your summary and description are seen by staff and will be useful when reviewing your progress and engagement.
	- When you are happy with your changes, and you have written the summary and description, click "Commit"!

> [!NOTE] Your first Git Commit!
> You have just completed what is called a "git commit" - a number of changes that have been packaged together. The real advantage of git comes from this, as you are able to see a history of your commits, and more importantly, you are able to reroll your portfolio back to any commit, should you really regret adding something or if you mess up your portfolio.
> 
> This is why it is important to create commits regularly!

---

14. Final Step! Creating a commit on GitHub Desktop only creates the commit on your machine. If you want the commit to be seen by staff, you will need to "Push" any commits that you have made. You can think of "pushing" as "uploading" your commits back to GitLab.

	![[Pasted image 20251001215837.png]]
	- To do this, simply click on the "Push origin" button on the top of GitHub Desktop.
	- You may need to provide your university username and password.

**Congratulations! You have successfully cloned the portfolio template, made changes to it, then committed and pushed your changes back!**

If you are using a university PC, you will only need to repeat steps 6 onwards.

---

Note from writer:
I understand this system can seem very daunting and technical. Unfortunately, git is incredibly important and is widely used in industry. When you start developing games, you will need to use git to track changes to your project and collaborate with others. It can be confusing when you first start, but over time this process will become like second nature. We wanted to introduce you to git as early as possible so that you have time to become accustomed with it. Do not feel discouraged if this seems difficult, it is admittedly very technical, but hopefully will become easier over time.

**Do not feel discouraged to ask for help at any point!**


