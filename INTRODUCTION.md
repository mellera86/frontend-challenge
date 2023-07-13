Hello there!

# What I've implemented

I've implemented the project using React, javascript and Tailwind CSS.

# Tradeoffs

1. Large commits. The commits I made were rather large. In a real-world scenario, I would have made atomic commits to make the code review process easier.
2. I used class-variance-authority to make the code more readable, functional and maintainable. Awesome tool!
3. Folder structure. I made sure this project can scale. The way I believe that can happen is if we separate concerns. I created a folder for shared components (very low level components used by different features). I also created a folder for the api calls to keep the api layer isolated from the rest of the app.
4. Whenever I create a component, I try to make sure it does only one thing. This way the component is more reusable and easier to test. All the components I created on this project are no more than 40 lines long. This makes them really easy to test and mantain. I also understand that there are cases where keeping the components this small is not possible and that's ok. I just try to keep them as small as possible.
