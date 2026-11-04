# Manual técnico (v1.0)
- `guardarCliente()`: lee los campos nombre y teléfono y muestra un mensaje de confirmación.

# Manual técnico (v1.1)
- `guardarCliente()`: lee los campos, valida el teléfono y muestra el resultado.
- `validarTelefono(tel)`: devuelve `true` si `tel` contiene solo dígitos.
  - Regex `/^[0-9]+$/`: `^` inicio, `[0-9]` dígito, `+` uno o más, `$` fin.
  - Un texto vacío o con cualquier otro carácter devuelve `false`.
- Se exporta con `module.exports` para poder probarla con Node.

