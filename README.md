Created By : Aravinth Raj J 
* [LinkedIn](https://www.linkedin.com/in/aravinth-raj-developer)!
* [View-My-Portfolio](https://aravinthraj42.github.io/aravinth-profile-portfolio/)

# Getting Started with Hex Node Clone Application

Application was Hosted on - https://hex-node-clone.netlify.app/

Orignal Source of the Application: https://www.hexnode.com/solutions/hexnode-kiosk/

Source Code: https://github.com/aravinthraj42/Hex-Node

# Pre-Requisites

* Node.js is required -- https://nodejs.org/en

You’ll need to have Node >= 14.0.0 and npm >= 5.6 on your machine


# Available Scripts

In the project directory, you can run:

Use Main Branch Only
 `npm install`

### `npm install styled-components` -- If required.

### `npm run build`

### `npm start`

Runs the application
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

.

### `npm test`

--->Note: Test Case are not Implemented for the Application.

# Documenation and Learning Curve

Application start from `App.js` folder

The HexNode application is built using React and styled-components. It includes a responsive navigation bar that adapts to different screen sizes, a toggle menu for small screens, and a tab-based slider to display various kiosk modes.



# Strengths (Pros)

 1.Modular Design:
Components are encapsulate with styled Components - East to debug since it was Small Application
Styled-components encapsulate styles, avoiding CSS conflicts.

 2.Responsive Layout:
Adapts to various screen sizes seamlessly using media queries.

 3.Dynamic User Experience:
Scroll-based visual feedback (e.g., background color change).


 4.Modern Tech Stack:
Built with React, utilizing hooks and modern best practices.
Styled-components simplify styling and theming.



# Limitations (Cons)

 1.Accessibility (A11y):

Good Application should work for Person with Disablity 
Needs improvements for keyboard navigation and ARIA attributes for better accessibility.
We should ensure Implementation with Accessibility

 2.Performance Optimization:

Since it was Clone Application, I was use for Internal Styling which is not Recommanded for Production Ready Application

Use of multiple styled-components may impact performance in larger applications.
Should Consider extracting reusable styles to reduce duplication.

 3. Limited Prop Utilization:

Components currently rely on internal state rather than leveraging reusable props, reducing flexibility for future enhancements.


 4. Limited Responsive Layout:

Not Complete Mobile Friendly or Tab Friendly Responsive Application
There might be minor issue on small device.
Due to Some Time Constrait I could not able Cover all Device.


 5. Testing Gaps:
Unit and integration tests are not implemented, leaving edge cases uncovered.



# Challenges Faced


 
 1.Horizontal Scrolling Issue

 Challenge:
 Unwanted horizontal scrolling occurred due to overflow caused by misaligned elements.
 Solution:
 Ensured all elements were styled with appropriate box-sizing, margin, and padding. Added overflow-x: hidden globally to avoid unintended scroll behavior.


 2. Mobile Menu Visibility

Challenge: 
The MenuToggle button was not visible on smaller screens.
Solution:
Adjusted @media queries and ensured proper positioning for smaller viewports.


 3. Dynamic Background Styling

Challenge: 
The background color transition on scroll was inconsistent across browsers.
Solution: 
Fine-tuned useEffect logic to reliably track scrollY changes and applied cross-browser-compatible CSS transitions.


4.Button Alignment and Size

Challenge: 
Try 14 days Trail Buttons rendered too large and aligned too close to the edge of the container.
Solution: 
Reduced button padding and adjusted margin to ensure proper alignment.


# Learning Curve:

 1.React Slick

https://react-slick.neostack.com/docs/example/responsive

`npm install slick-carousel --save`

Gothrough React-Slick Docs and Implemented Logic and 
Responsives at for Logo Slider  `HexSupportedLogo` Components


2. React swiper

https://swiperjs.com/react#styles

`  npm i swiper`

Go through Swiper Docs and Add Logic and Styles for  `HexSlider` Components

3. Debugging CSS:

Acquired skills to identify and fix CSS bugs causing layout issues
Learned to use browser dev tools more effectively to debug complex styling problems.

4.Styled-Components Mastery:

Learned to leverage styled-components for responsive design and scoped styling.
Gained insights into structuring reusable and modular CSS-in-JS solutions.


# Conclusion

Learning and Implementing HexNode application helps to learn more pratical in responsive design and modern front-end practices.

Thanks for opportunity to Learning and Implement Application which helps to gain Pratical Experience.

