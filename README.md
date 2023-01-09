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
  <a href="#-apresentação-em-vídeo-do-projeto">Vídeo</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-tecnologias-utilizadas">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-sobre">Sobre</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-alguns-destaques">Destaques</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-clonando-o-projeto">Clone</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-contato-dos-contribuintes">Contato</a>
</p>
<br>

## 📹 Apresentação em Vídeo do Projeto
<div align="center">
  <video src="https://user-images.githubusercontent.com/86276393/211228214-445a84f4-5743-476c-887a-e536f1744f71.mp4" />
</div>

> **Caso o vídeo apresente algum erro, recarregue a página!**<br>
> Acesse o projeto online **[AQUI](https://luk4x-gencard.netlify.app/)**

## 🚀 Tecnologias Utilizadas

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

## 📝 Sobre

> Assistir o vídeo acima e/ou acessar o projeto online ajudará na compreensão da explicação!

A aplicação se consiste num fluxo de autenticação completo, onde é possível criar uma conta, fazer LogIn e LogOut, atualizar os dados da conta, e redefinir a senha em caso de esquecimento, isso utilizando Firebase para armazenar os dados dos usuários e realizar todo o sistema de autenticação, e React para a interface.<br>
A aplicação conta com as validações necessárias para que todos os erros sejam tratados, assim como mensagens de feedback para criar uma melhor experiência para o usuário, além de outras boas práticas relevantes para esse contexto de autenticação.<br>

### 📄 Páginas

O projeto tem um total de 5 componentes de páginas, sendo eles:

  - **Home**: Essa é a página privada de perfil do usuário, contendo nela os dados do usuário juntamente com a possibilidade de alterá-los e fazer LogOut.
  - **ForgotPassword**: Essa página é responsável por enviar um email de redefinição de senha para o usuário a partir do email inserido.
  - **Login**: Essa página é responsável por logar o usuário a partir dos dados inseridos.
  - **Register**: Essa página é responsável por cadastrar um usuário a partir dos dados inseridos.
  - **UpdateProfile**: Essa página é responsável por possibilitar o usuário de alterar seus dados cadastrados.

### 📑 Demais Componentes
  
Separados em componentes de **Project**, **Layout** e **Form**, o iManager tem mais 18 componentes, sendo eles:
  
  - **Navbar**: Esse componente é renderizado no **main** do projeto, e reaproveitado em todas as páginas. Ele é relativo a barra de navegação presente em todas as páginas.
  - **Footer**: Esse componente é renderizado no **main** do projeto, e reaproveitado em todas as páginas. Ele é relativo ao rodapé presente em todas as páginas, e nele estão as **minhas redes sociais**.
  - **Container**: Esse componente se consiste num container dinâmico que criei para evitar repetições de código.
  - **DesktopHelpCenterShowCase**: Esse componente é relativo ao monitor que está na página de **Contact**.
  - **MobileAppHelpCenterShowCase**: Esse componente é relativo ao celular que está na página de **Contact**.
  - **SheeleChatBot**: Esse componente é relativo ao ChatBot presente nos componentes de **DesktopHelpCenterShowCase** e **MobileAppHelpCenterShowCase**.
  - **IManagerFooter**: Esse componente é relativo ao rodapé do iManager que aparece nas páginas de **Company** e **Contact**.
  - **LinkButton**: Esse componente é um botão dinâmico de redirecionamento de página.
  - **Loading**: Esse componente é relativo a barra de carregamento que aparece enquanto algumas requisições são feitas. Ex: Ao acessar a página de **Projects**.
  - **Message**: Esse componente é relativo as flash messages que aparecem ao realizar determinadas ações na plataforma. Ex: Ao criar um projeto.
  - **PurpleBackground**: Esse componente é relativo ao background roxo decorativo em quase todas as páginas.
  - **ProjectCard**: Esse componente é relativo aos cards dos projetos presentes na página de **Projects**.
  - **ServiceCard**: Baseado no **ProjectCard**, esse componente é relativo aos cards dos serviços presentes nos projetos.
  - **ProjectForm**: Esse componente é relativo ao formulário de criação/edição de projetos.
  - **ServiceForm** Baseado no **ProjectForm**, esse componente é relativo ao formulário criação/edição de serviços.
  - **Input**: Esse componente se consiste num input dinâmico reaproveitado nos componentes de **ProjectForm** e **ServiceForm**.
  - **Select**: Esse componente se consiste num Select dinâmico reaproveitado nos componentes de **ProjectForm** e **ServiceForm**.
  - **SubmitButton**: Esse componente se consiste num botão dinâmico reaproveitado periodicamente pelo projeto.

## 📖 Clonando o Projeto

Para clonar e executar este projeto em seu computador, você precisará do [Git](https://git-scm.com/) e [Node.js v18.12.1](https://nodejs.org/en/) ou superior previamente instalados.<br>
Feito isso, no terminal:

```bash
# Clone esse repositório com:
> git clone https://github.com/Luk4x/login-flux.git

# Entre no repositório com:
> cd login-flux

# Instale as dependências com:
> npm install

# Execute o projeto com:
> npm run dev

# Feito isso, você já poderá acessar o projeto pelo link que aparecerá no terminal! (algo como http://localhost:3000/ ou http://127.0.0.1:5173/)
```

## 🤝 Contato dos Contribuintes

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
  <a href="#-login-flux-project">Voltar ao Topo</a>
</p>
