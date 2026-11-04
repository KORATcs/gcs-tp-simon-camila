# Plan de pruebas (v1.0)
| ID | Caso | Entrada | Resultado esperado |
|---|---|---|---|
| CP-01 | Guardar cliente | Nombre y teléfono cualquiera | Se muestra "Cliente guardado" |
| CP-02 | Teléfono solo números | 123456789 | Válido (true) |
| CP-03 | Teléfono con letras | 12ab34 | Inválido (false) |
| CP-04 | Teléfono vacío | (vacío) | Inválido (false) |
| CP-05 | Teléfono con espacio | 12 34 | Inválido (false) |
| CP-06 | Teléfono con símbolo | +54911 | Inválido (false) |