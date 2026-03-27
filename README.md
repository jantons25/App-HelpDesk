# App HelpDesk 🛠️

> Plataforma full-stack de gestión interna — usuarios, tareas, equipos e inventario con notificaciones automáticas vía WhatsApp.

![En Desarrollo](https://img.shields.io/badge/Estado-Proyecto%20Personal-blue?style=flat-square)
![React](https://img.shields.io/badge/React-20232A?style=flat-square&logo=react&logoColor=61DAFB)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat-square&logo=nodedotjs&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=flat-square&logo=mongodb&logoColor=white)
![Python](https://img.shields.io/badge/Python-3776AB?style=flat-square&logo=python&logoColor=white)
![WhatsApp](https://img.shields.io/badge/WhatsApp%20API-25D366?style=flat-square&logo=whatsapp&logoColor=white)

---

## 🚀 Sobre el proyecto

App HelpDesk es una aplicación full-stack orientada a la gestión interna de equipos de trabajo. Centraliza la administración de usuarios, asignación de tareas, gestión de equipos e inventario de hardware — e integra notificaciones automáticas por WhatsApp cada vez que se asigna una tarea a un usuario.

El proyecto nació como exploración personal para combinar un stack JavaScript moderno con automatizaciones en Python y consumo de APIs externas.

---

## ✨ Características

- 👥 **Gestión de usuarios** — registro, roles y administración de miembros del equipo
- ✅ **Gestión de tareas** — crear, asignar y hacer seguimiento de tareas
- 🖥️ **Inventario de equipos** — control de hardware y recursos tecnológicos
- 📲 **Notificaciones WhatsApp** — aviso automático al usuario cuando se le asigna una tarea vía API de WhatsApp
- 🐍 **Microservicio Python** — script dedicado al consumo de la API de WhatsApp
- 🔀 **Enrutamiento** — navegación fluida entre módulos
- 🔌 **API REST** — backend desacoplado con Express

---

## 🛠 Tech Stack

| Capa | Tecnología |
|---|---|
| Frontend | React · JavaScript · CSS |
| Backend | Node.js · Express · API REST |
| Base de datos | MongoDB |
| Automatización | Python |
| Notificaciones | WhatsApp API |

---

## 🏗 Arquitectura

```
┌─────────────────┐        ┌──────────────────────┐        ┌─────────────────┐
│                 │  HTTP  │                      │Mongoose │                 │
│  React Frontend │◄──────►│  Node.js + Express   │◄───────►│    MongoDB      │
│                 │        │                      │         │                 │
└─────────────────┘        └──────────┬───────────┘        └─────────────────┘
                                      │
                                      │ trigger
                                      ▼
                           ┌──────────────────────┐        ┌─────────────────┐
                           │                      │  HTTP  │                 │
                           │   Python Script      │───────►│  WhatsApp API   │
                           │                      │        │                 │
                           └──────────────────────┘        └─────────────────┘
```

---

## 🚀 Instalación local

### Prerequisitos
- Node.js >= 18
- MongoDB (local o Atlas)
- Python >= 3.10

### Pasos

```bash
# 1. Clonar el repositorio
git clone https://github.com/jantons25/App-HelpDesk.git
cd App-HelpDesk

# 2. Instalar dependencias del backend
npm install

# 3. Instalar dependencias del frontend
cd client
npm install
cd ..

# 4. Configurar variables de entorno
cp .env.example .env
# Edita el archivo .env con tus credenciales
```

### Variables de entorno

```env
MONGO_URI=tu_conexion_de_mongodb
JWT_SECRET=tu_clave_secreta
PORT=4000
WHATSAPP_API_KEY=tu_api_key
WHATSAPP_API_URL=url_de_la_api
```

### Ejecutar en desarrollo

```bash
# Backend (desde la raíz)
npm run dev

# Frontend (desde /client)
cd client
npm run dev

# Microservicio Python (desde /src o donde esté el script)
python whatsapp_notifier.py
```

---

## 📁 Estructura del proyecto

```
App-HelpDesk/
├── client/              # Frontend React
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   └── ...
├── src/                 # Backend Node.js
│   ├── routes/
│   ├── controllers/
│   ├── models/
│   └── ...
├── package.json
└── ...
```

---

## 🔮 Próximas mejoras

- [ ] Dashboard con métricas de tareas por usuario
- [ ] Sistema de prioridades y fechas límite
- [ ] Notificaciones por email además de WhatsApp
- [ ] Deploy en Vercel + Render

---

## 👤 Autor

**Juan José Antón Silva**

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=flat-square&logo=linkedin&logoColor=white)](https://linkedin.com/in/juanantonsilva)
[![GitHub](https://img.shields.io/badge/GitHub-100000?style=flat-square&logo=github&logoColor=white)](https://github.com/jantons25)

---

## 📄 Licencia

Este proyecto es de uso personal y educativo.
