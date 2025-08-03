# Portfólio - Yure Samarone Gomes Duarte

Este é um portfólio profissional desenvolvido em HTML, CSS e JavaScript puro, utilizando Tailwind CSS para estilização e Alpine.js para interatividade.

## 🚀 Características

- **Design Responsivo**: Funciona perfeitamente em desktop, tablet e mobile
- **Cores Personalizadas**: Paleta azul escuro e branco conforme solicitado
- **Conteúdo Editável**: Todos os dados importantes são configuráveis via `x-data` do Alpine.js
- **Animações Suaves**: Transições e efeitos visuais modernos
- **Navegação Intuitiva**: Menu fixo com scroll suave entre seções
- **Formulário de Contato**: Interface para recebimento de mensagens

## 📁 Estrutura do Projeto

```
portfolio-yure/
├── index.html          # Arquivo principal do portfólio
└── README.md          # Este arquivo
```

## 🛠️ Tecnologias Utilizadas

- **HTML5**: Estrutura semântica
- **Tailwind CSS**: Framework CSS via CDN
- **Alpine.js**: Framework JavaScript reativo via CDN
- **Font Awesome**: Ícones via CDN
- **Google Fonts**: Fonte Inter via CDN

## ✏️ Como Editar o Conteúdo

O portfólio foi desenvolvido com Alpine.js, permitindo fácil edição do conteúdo através do objeto `portfolioData()` no final do arquivo HTML. Você pode editar:

### Informações Pessoais
```javascript
personalInfo: {
    name: 'Seu Nome',
    title: 'Seu Título Profissional',
    email: 'mailto:seu@email.com',
    linkedin: 'https://linkedin.com/in/seu-perfil',
    github: 'https://github.com/seu-usuario',
    website: 'https://seu-site.com',
    location: 'Sua Localização',
    summary: 'Seu resumo profissional...',
    resume: 'link-para-seu-cv.pdf'
}
```

### Experiências Profissionais
```javascript
experienceData: [
    {
        id: 1,
        position: 'Cargo',
        company: 'Empresa',
        period: 'Período',
        location: 'Local',
        description: 'Descrição das atividades...',
        skills: ['Skill1', 'Skill2', 'Skill3']
    }
    // Adicione mais experiências...
]
```

### Projetos
```javascript
projectsData: [
    {
        id: 1,
        name: 'Nome do Projeto',
        description: 'Descrição do projeto...',
        technologies: ['Tech1', 'Tech2'],
        period: 'Período',
        github: 'https://github.com/link',
        demo: 'https://demo-link.com'
    }
    // Adicione mais projetos...
]
```

### Habilidades
```javascript
skillsData: [
    {
        name: 'Categoria',
        icon: 'fas fa-icon-name',
        skills: ['Skill1', 'Skill2', 'Skill3']
    }
    // Adicione mais categorias...
]
```

## 🎨 Personalização de Cores

As cores principais podem ser alteradas modificando as classes CSS no arquivo HTML:

- **Azul Escuro**: `bg-gray-800`, `gradient-bg` (gradiente personalizado)
- **Azul Médio**: `bg-blue-600`, `text-blue-600`
- **Branco**: `bg-white`, `text-white`

## 📱 Responsividade

O portfólio é totalmente responsivo, utilizando as classes responsivas do Tailwind CSS:

- `sm:` - Telas pequenas (640px+)
- `md:` - Telas médias (768px+)
- `lg:` - Telas grandes (1024px+)

## 🌐 Como Hospedar

### Opção 1: Hospedagem Estática (Recomendada)
- **Netlify**: Arraste a pasta do projeto para netlify.com
- **Vercel**: Conecte seu repositório GitHub
- **GitHub Pages**: Ative nas configurações do repositório

### Opção 2: Servidor Web
- Coloque os arquivos na pasta pública do seu servidor
- Acesse via navegador

## 📧 Configuração do Formulário de Contato

O formulário atualmente exibe um alerta. Para implementar o envio real:

1. **Serviço de Email**: Use Formspree, EmailJS ou similar
2. **Backend Próprio**: Implemente endpoint para receber os dados
3. **Integração**: Modifique a função `submitForm()` no JavaScript

Exemplo com EmailJS:
```javascript
submitForm() {
    emailjs.send('service_id', 'template_id', {
        name: this.contactForm.name,
        email: this.contactForm.email,
        message: this.contactForm.message
    }).then(() => {
        alert('Mensagem enviada com sucesso!');
        this.contactForm = { name: '', email: '', message: '' };
    });
}
```

## 🔧 Manutenção

Para manter o portfólio atualizado:

1. **Atualize regularmente**: Adicione novos projetos e experiências
2. **Teste em diferentes dispositivos**: Verifique a responsividade
3. **Otimize imagens**: Use formatos modernos (WebP) quando possível
4. **Monitore performance**: Use ferramentas como PageSpeed Insights

## 📄 Licença

Este portfólio foi desenvolvido especificamente para Yure Samarone Gomes Duarte. Sinta-se livre para usar como base para seu próprio portfólio.

---

**Desenvolvido com ❤️ usando HTML, Tailwind CSS e Alpine.js**

