<table align="right">
  <tr>
    <td>
      <a href="readme-en.md">🇺🇸 English</a>
    </td>
  </tr>
  <tr>
    <td>
      <a href="README.md">🇧🇷 Português</a>
    </td>
  </tr>
</table>

![luk4x-repo-status](https://img.shields.io/badge/Status-Finished-lightgrey?style=for-the-badge&logo=headspace&logoColor=green&color=lightgrey)
![luk4x-repo-license](https://img.shields.io/github/license/Luk4x/login-flux?style=for-the-badge&logo=unlicense&logoColor=lightgrey)
# 🌐 LogIn Flux Project

<br>
<p align="center">
  <a href="#-project-video-presentation">Video</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-technologies-used">Technologies</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-about">About</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-pages">Pages</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-other-components">Components</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-cloning-the-project">Cloning</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-contributor-contact">Contact</a>
</p>
<br>

## 📹 Project Video Presentation
<div align="center">
  <video src="https://user-images.githubusercontent.com/86276393/211228214-445a84f4-5743-476c-887a-e536f1744f71.mp4">
</div>

> **If the video has any errors, reload the page!**<br>
> Access the project online **[HERE](https://luk4x-imanager.netlify.app/)**

## 🚀 Technologies Used

- [ReactJS](https://pt-br.reactjs.org)
- [Firebase](https://firebase.google.com/)
- [React Hook Form](https://react-hook-form.com/get-started/)
- [Yup](https://github.com/jquense/yup)
- [Styled Components](https://styled-components.com/docs)
- [React Hot Toast](https://react-hot-toast.com/)
- [React Router v6](https://reactrouter.com/en/main)
- [React Icons](https://react-icons.github.io/react-icons/)
- [Vite + SWC](https://vitejs.dev/)
- [NodeJS](https://nodejs.org)
- [Javascript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
- [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)

## 📝 About

> Watching the video above and/or accessing the project online will help you understand the explanation!

The application consists of a complete authentication flow, where it is possible to create an account, LogIn and LogOut, update the account data, and reset the password in case of forgetting, using Firebase to store the users' data and carry out all the authentication system, and React for the interface.<br>
The application has the necessary validations so that all errors are handled, as well as feedback messages to create a better user experience, in addition to other good practices relevant to this authentication context.<br>

### 📄 Pages

The application has a total of 5 page components, namely:

   - **Home**: This is the user's private profile page, containing the user's data along with the possibility of changing them and logging out.
   - **ForgotPassword**: This page is responsible for sending a password reset email to the user from the email entered.
   - **Login**: This page is responsible for logging in the user based on the data entered.
   - **Register**: This page is responsible for registering a user based on the data entered.
   - **UpdateProfile**: This page is responsible for enabling the user to change their registered data.

### 📑 Other Components
  
   - The **Button**, **Form** and **Input** components are respectively the *Buttons*, *Forms*, and *Inputs* components that are periodically reused by the application.
   - **MyToast**: This component consists of a way to streamline and standardize the alerts that appear in the application.
   - **AuthContext**: This component is responsible for disseminating user information and authentication functions throughout the application.
   - **Routes**: This component is responsible for creating and managing the application's routes.
   - **PrivateRoute**: This component is responsible for private a route, being used in */* and */update-profile* routes.
  
## 📖 Cloning the Project

To clone and run this project on your computer you will need [Git](https://git-scm.com/) and [Node.js v18.12.1](https://nodejs.org/en/) or higher and previously installed.<br>
After that, in the terminal:

```bash
# Clone this repository with:
> git clone https://github.com/Luk4x/login-flux.git

# Enter the repository with:
> cd login-flux

# Install dependencies with:
> npm install

# Run the project with:
> npm run dev

# Once this is done, you will be able to access the project through the link that will appear in the terminal! (something like http://127.0.0.1:5173/ or http://localhost:5173/)
```

## 🤝 Contributor Contact

<table border="2">
  <tr>
    <td align="center">
      <details>
        <summary>
          <b><a href="https://cursos.alura.com.br/vitrinedev/lucasmacielf">Vitrine.Dev</a> 🪟</b>
          <table>
            <tr>
              <td align="center">
                <a href="https://github.com/Luk4x">
                  <img src="https://avatars.githubusercontent.com/Luk4x" width="150px;" alt="Luk4x Github Photo"/>
                </a>
                <br>
                <a href="https://www.linkedin.com/in/lucasmacielf/">
                  <sub>
                    <b>Lucas Maciel</b>
                  </sub>
                </a>
              </td>
            </tr>
          </table>
        </summary>

| :placard: Vitrine.Dev | Lucas Maciel |
| -------------  | --- |
| :sparkles: Nome        | **🌐 LogIn Flux**
| :label: Tecnologias | reactjs, firebase, react hook form, styled components, yup, react router, react hot toast, react icons, vitejs, javascript, css, html, swc
| :camera: Img         | <img src="https://user-images.githubusercontent.com/86276393/211228037-b5e0e5fb-0d33-4345-9f89-3fda5212d29f.png#vitrinedev" alt="vitrine.dev thumb" width="100%"/>

</details>
</td>
</tr>
</table>

<p align="right">
  <a href="#-login-flux-project">Back to Top</a>
</p>
