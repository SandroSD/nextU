```Javascript



publicaciones.id id, titulo, resumen, fecha_hora, pseudonimo, votos, avatar

<% if (publicacion.avatar && publicacion.avatar != "") { %>
              <img class="avatar" src="/avatars/<%=publicacion.avatar%>" />
            <% } else {
            %>
            <span class="icon-user"></span>
            <% } %>
```
