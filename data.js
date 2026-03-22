// Portfolio data — edit this file to update your content
const portfolioData = {
  "profile": {
    "id": 1,
    "name": "Gabriel Del Cid",
    "title": "Desarrollador de AWS",
    "bio": "Cuento con experiencia en Python y JavaScript, especializado en arquitectura back-end y trazando mi camino hacia la ciberseguridad.\n\nActualmente certificándome en AWS Developer Associate, apasionado por la computación en la nube y el diseño de aplicaciones escalables.",
    "email": "gabriel13.dev@gmail.com",
    "github": "https://github.com/gabriel-del13",
    "linkedin": "https://www.linkedin.com/in/gabriel-delcid-13200x",
    "profile_image": "/images/perfil.jpg",
    "resume": ""
  },
  "skills": [
    { "id": 1, "name": "Angular 18", "category": "frontend", "proficiency": "intermediate", "icon": "images/skills/angular-logo.png" },
    { "id": 2, "name": "TypeScript", "category": "frontend", "proficiency": "intermediate", "icon": "images/skills/ts-logo-512.png" },
    { "id": 3, "name": "JavaScript", "category": "frontend", "proficiency": "intermediate", "icon": "images/skills/javascript-logo.png" },
    { "id": 4, "name": "HTML", "category": "frontend", "proficiency": "intermediate", "icon": "images/skills/html-logo.png" },
    { "id": 5, "name": "React", "category": "frontend", "proficiency": "beginner", "icon": "images/skills/react-logo.png" },
    { "id": 6, "name": "Tailwind CSS", "category": "frontend", "proficiency": "beginner", "icon": "images/skills/tailwindcss-logo.png" },
    { "id": 7, "name": "Python", "category": "backend", "proficiency": "advanced", "icon": "images/skills/python-logo.png" },
    { "id": 8, "name": "Django", "category": "backend", "proficiency": "advanced", "icon": "images/skills/django-logo-negative.png" },
    { "id": 9, "name": "PostgreSQL", "category": "database", "proficiency": "intermediate", "icon": "images/skills/postgresql-logo.png" },
    { "id": 10, "name": "DynamoDB", "category": "database", "proficiency": "beginner", "icon": "images/skills/dynamodb-logo.png" },
    { "id": 11, "name": "AWS", "category": "devops", "proficiency": "intermediate", "icon": "images/skills/aws_logo_307x170px.png" },
    { "id": 12, "name": "AWS API Gateway", "category": "devops", "proficiency": "intermediate", "icon": "images/skills/logo.png" },
    { "id": 13, "name": "AWS Elastic Beanstalk", "category": "devops", "proficiency": "beginner", "icon": "images/skills/aws-elastic-beanstalk-logo-png_seeklogo-456307.png" },
    { "id": 14, "name": "AWS Lightsail", "category": "devops", "proficiency": "beginner", "icon": "images/skills/lightsail-logo.png" },
    { "id": 15, "name": "AWS Lambda", "category": "other", "proficiency": "advanced", "icon": "images/skills/aws-lambda.jpg" },
    { "id": 16, "name": "EC2", "category": "other", "proficiency": "beginner", "icon": "images/skills/EC2.png" },
    { "id": 17, "name": "AWS VPC", "category": "other", "proficiency": "beginner", "icon": "images/skills/Virtual_Private_Cloud.png" },
    { "id": 18, "name": "Postman", "category": "tools", "proficiency": "advanced", "icon": "images/skills/postman-seeklogo.png" },
    { "id": 19, "name": "Docker", "category": "tools", "proficiency": "intermediate", "icon": "images/skills/Docker-Symbol.png" },
    { "id": 20, "name": "GIT", "category": "tools", "proficiency": "intermediate", "icon": "images/skills/git-icon-logo-png-transparent.png" },
    { "id": 21, "name": "Cloudflare", "category": "tools", "proficiency": "intermediate", "icon": "images/skills/cloudflare-logo.png" },
    { "id": 22, "name": "AWS WAF", "category": "tools", "proficiency": "beginner", "icon": "images/skills/WAF.png" }
  ],
  "projects": [
    {
      "id": 6,
      "title": "Sistema Integral de Gestión de Finanzas Personales",
      "description": "El proyecto API Revenue Portfolio es un sistema de gestión de finanzas personales desarrollado como una API RESTful. Su objetivo es proporcionar una herramienta robusta para el control detallado del dinero, permitiendo a los usuarios gestionar múltiples billeteras digitales, registro transaccional de ingresos/egresos y actualización de balance en tiempo real. Utiliza autenticación JWT y PostgreSQL.",
      "short_description": "APIRest para llevar tus cuentas personales. Permite registrar ingresos, egresos y administrar diferentes billeteras.",
      "thumbnail": "images/projects/thumbnails/api-finanzas.png",
      "github_url": "https://github.com/gabriel-del13/API_revenue_portfolio",
      "status": "completed",
      "featured": true,
      "order": 1
    },
    {
      "id": 1,
      "title": "Emulador de NES en HTML con Docker",
      "description": "Solución autocontenida y portable para emular juegos de NES en el navegador. Utiliza el emulador JNES y tecnología Docker + Docker Compose para asegurar un despliegue rápido. La arquitectura permite a los usuarios cargar sus propias ROMs a través de la interfaz web. Compatible con AWS Elastic Beanstalk y Lightsail.",
      "short_description": "Utiliza el emulador JNES y despliegue en AWS Elastic Beanstalk.",
      "thumbnail": "images/projects/thumbnails/emuNES.png",
      "github_url": "https://github.com/gabriel-del13/emulador_nes_docker",
      "gallery": [
        { "src": "images/projects/gallery/emuNES-2.png", "caption": "Mario Bros 3" },
        { "src": "images/projects/gallery/emuNES-3.png", "caption": "Kirby Adventure" },
        { "src": "images/projects/gallery/emuNES-4.png", "caption": "Final Fantasy" },
        { "src": "images/projects/gallery/emuNES-5.png", "caption": "Kid Icarus" },
        { "src": "images/projects/gallery/emuNES-6.png", "caption": "Zelda" }
      ],
      "status": "completed",
      "featured": true,
      "order": 2
    },
    {
      "id": 5,
      "title": "Catalogo web con login y wishlist",
      "description": "Proyecto Full Stack con arquitectura desacoplada. Backend en Python/Django con API RESTful robusta y Frontend en Angular 18. Incluye sistema de autenticación completo (incluyendo Google Login) y gestión de lista de deseos personalizada para usuarios autenticados.",
      "short_description": "Aplicación web Full Stack moderna desarrollada con Angular 18 y una API RESTful en Python/Django.",
      "thumbnail": "images/projects/thumbnails/catalogo.png",
      "github_url": "https://github.com/gabriel-del13/web_frontend_angular18",
      "gallery": [
        { "src": "images/projects/gallery/catalogo-2.png", "caption": "Filtrado" },
        { "src": "images/projects/gallery/catalogo-3.png", "caption": "Busqueda" },
        { "src": "images/projects/gallery/catalogo-4.png", "caption": "Detalles" },
        { "src": "images/projects/gallery/catalogo-5.png", "caption": "Wishlist" }
      ],
      "status": "completed",
      "featured": true,
      "order": 3
    },
    {
      "id": 3,
      "title": "Sistema de Monitoreo de Aplicaciones Web",
      "description": "Sistema diseñado para verificar disponibilidad y rendimiento de sitios web automáticamente. Arquitectura basada en microservicios con Docker Compose, Frontend en Angular/Tailwind, Backend en Node.js/Express con cron jobs, y PostgreSQL para el histórico de uptime.",
      "short_description": "Monitor App utiliza Docker para verificar automáticamente el estado (uptime/downtime) de múltiples URLs.",
      "thumbnail": "images/projects/thumbnails/monitoreo.png",
      "github_url": "https://github.com/gabriel-del13/monitor-app",
      "gallery": [
        { "src": "images/projects/gallery/monitoreo-1.png", "caption": "Dashboard" },
        { "src": "images/projects/gallery/monitoreo-2.png", "caption": "Add" }
      ],
      "status": "completed",
      "featured": true,
      "order": 4
    },
    {
      "id": 4,
      "title": "Catalogo de Videojuegos",
      "description": "Primera página web Full Stack concebida como hito de aprendizaje. Implementa un catálogo funcional utilizando Angular 18 para el frontend y Django para el backend, comunicados mediante una API RESTful.",
      "short_description": "Mi primer proyecto web Full Stack. Un catálogo de productos desarrollado con Angular 18 y Django.",
      "thumbnail": "images/projects/thumbnails/catalogo-videojuegos.png",
      "github_url": "https://github.com/gabriel-del13/My-first-page-web",
      "gallery": [
        { "src": "images/projects/gallery/catalogo-videojuegos-1.png", "caption": "Busqueda" },
        { "src": "images/projects/gallery/catalogo-videojuegos-2.png", "caption": "Detalles" }
      ],
      "status": "completed",
      "featured": true,
      "order": 5
    },
    {
      "id": 2,
      "title": "PDF-Tools",
      "description": "Script de escritorio realizado en Python con interfaz Tkinter. Permite unir hasta 5 archivos PDF y convertir archivos DOC/IMG a PDF de forma sencilla. Incluye un ejecutable (.exe) listo para instalar.",
      "short_description": "Proyecto en Python + Tkinter para manipulación de archivos PDF.",
      "thumbnail": "images/projects/thumbnails/App-Preview.png",
      "github_url": "https://github.com/gabriel-del13/PDF-Tools",
      "status": "completed",
      "featured": true,
      "order": 6
    }
  ]
};