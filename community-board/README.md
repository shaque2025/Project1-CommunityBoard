# Web Development Project 1 - *Community Board*

Submitted by: **Syeda Haque**

**This web app is a responsive community board showcasing 12 popular food trucks with vibrant card layouts, hover animations, and a distinctive red-and-white striped awning design that works seamlessly across desktop and mobile devices.**

Time spent: **3** hours spent in total

## Required Features

The following **required** functionality is completed:

- [x] **The app has a cohesive, unique theme for events or resources relevant to a specific community**
  - [x] Header/title describing the theme is displayed
- [x] **At least 10 unique events or resources are displayed in a responsive card format**
  - [x] There are at least 10 cards displayed 
  - [x] The cards should be displayed in an organized format (ex. a grid, or in one line)
  - [x] Each card should include some information about the event or resource


The following **optional** features are implemented:

- [x] Buttons or links to a related resources are on each card component
  - [x] All cards have buttons or links in addition to text
- [x] The site is responsive for both desktop and mobile formats
  - [x] Web app is shown in a mobile format
  - [x] **Video Walkthrough Special Instructions**: To ease the grading process, please use Chrome Developer Tools' "Toggle Device" button to demonstrate that your web application's responsiveness in both a desktop *and* a mobile format. Detailed instructions can be found below this stretch feature on the project page. 

The following **additional** features are implemented:

* [x] List anything else that you added to improve the site's functionality!

## Video Walkthrough

Here's a walkthrough of implemented required features:

<img src='walkthrough.gif' title='Video Walkthrough' width='' alt='Video Walkthrough' />

<!-- Replace this with whatever GIF tool you used! -->
GIF created with LICEcap 
<!-- Recommended tools:
[Kap](https://getkap.co/) for macOS
[ScreenToGif](https://www.screentogif.com/) for Windows
[peek](https://github.com/phw/peek) for Linux. -->

## Notes

1) Awning Design - Creating the red and white striped awning with proper scalloped edges that matched the reference image exactly
2) Image Loading Issues - Some Unsplash image URLs weren't loading (Lobsta Love and El Jefe's Tacos), requiring replacement with working URLs
3) Awning Positioning - Balancing the awning's vertical position so the striped pattern was visible while keeping the scalloped edge clear and avoiding overlap with the title
4) Scallop Shape - Getting the scallops to curve outward (convex) instead of inward (concave) to match the sample design
5) CSS vs Image Approach - Initially tried creating the awning with pure CSS/SVG, then switched to using an actual PNG image file for simplicity
6) Responsive Spacing - Ensuring proper spacing between the awning and title text across different screen sizes (mobile, tablet, desktop)
7) Unused Import Warning - Removing the useState import that wasn't being used in the App component

## License

    Copyright [yyyy] [name of copyright owner]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
