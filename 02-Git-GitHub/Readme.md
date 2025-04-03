![logo](../_src/assets/logo.png)

# Git y GitHub: Control de Versiones Profesional

## Fundamentos de Git
Git es el sistema de control de versiones estándar en la industria del desarrollo de software. Permite gestionar cambios en el código fuente, mantener un historial detallado de modificaciones y facilitar el trabajo colaborativo entre equipos de desarrollo.

---

## Comandos Esenciales de Git

- `git init`: Crea un nuevo repositorio Git en el directorio actual
- `git add ArchivoEjemplo.js`: Prepara cambios para commit
- `git commit -m "mensaje descriptivo"`: Registra cambios con un mensaje claro
- `git status`: Muestra el estado actual del repositorio
- `git log`: Visualiza el historial de commits
- `git push`: Sube cambios al repositorio remoto
- `git pull`: Obtiene e integra cambios del repositorio remoto
- `git diff`: Compara diferencias entre versiones

---

## Estados de Archivos en Git
El flujo de trabajo en Git sigue estos estados fundamentales:

1. **Seguidos (Tracked)**: Archivos bajo control de versiones
2. **Preparados (Staged)**: Cambios listos para commit
3. **Modificados (Unstaged)**: Cambios no preparados
4. **No seguidos (Untracked)**: Archivos nuevos no registrados

### Gestión de estados
- `git add <archivo>`: Prepara cambios
- `git reset HEAD <archivo>`: Deshace preparación
- `git commit`: Confirma cambios
- `git rm --cached <archivo>`: Deja de seguir archivo
- `git rm --force <archivo>`: Elimina archivo completamente

---

## Gestión de Ramas y Fusiones
El sistema de ramas permite desarrollar funcionalidades de forma aislada.

### Estrategia de Ramas Profesional
- **Main**: Versión estable y producción
- **Develop**: Integración de features
- **Feature/***: Desarrollo de nuevas funcionalidades
- **Hotfix/***: Correcciones urgentes

### Comandos clave para ramas
- `git branch <nombre>`: Crea nueva rama
- `git checkout <nombre>`: Cambia de rama
- `git checkout -b <nombre>`: Crea y cambia a rama
- `git merge <rama>`: Fusiona ramas
- `git branch -d <rama>`: Elimina rama local

#### Solución de conflictos
Al detectar conflictos:
1. Editar los archivos afectados
2. Marcar como resuelto: `git add <archivo>`
3. Confirmar: `git commit -m "Fix merge conflict"`

---

## GitHub: Plataforma de Colaboración
GitHub es la plataforma líder para alojar repositorios Git y facilitar el trabajo en equipo.

### Configuración inicial
1. **Conectar repositorio local**:
```bash
git remote add origin <URL>
```
2. **Verificar conexión**:
```bash
git remote -v
```
3. **Subir cambios**:
```bash
git push -u origin main
```
4. **Clonar repositorio**:
```bash
git clone <URL>
```

### Flujo de trabajo colaborativo
- Añadir colaboradores en **Settings > Collaborators**
- Usar Pull Requests para revisión de código
- Implementar políticas de protección de ramas

---

## Funcionalidades Avanzadas

### Archivo .gitignore
Excluye archivos sensibles o innecesarios:
```txt
# Ejemplo básico
node_modules/
.env
*.log
```

### Modificación de commits
Editar el último commit:
```bash
git commit --amend -m "Nuevo mensaje"
```

### Recuperación de cambios
Ver historial completo:
```bash
git reflog
```

### Búsqueda en código
Encontrar términos:
```bash
git grep "patrón"
```

---

## Conclusión 
Git y GitHub constituyen herramientas esenciales para el desarrollo moderno de software. Su dominio permite:
- Mantener un historial de cambios preciso
- Facilitar la colaboración en equipos distribuidos
- Implementar flujos de trabajo profesionales
- Gestionar proyectos complejos eficientemente

Software Labs recomienda practicar estos conceptos regularmente para alcanzar un dominio profesional de estas herramientas fundamentales.