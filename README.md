# Optimall Icons

Biblioteca de ícones React no estilo Lucide, gerada a partir de SVGs exportados do Figma.

## Instalação (npm)

```bash
npm install optimall-icons
```

## Uso

```tsx
import { AlignHorizontalDistributeStart } from "optimall-icons";

export default function App() {
	return <AlignHorizontalDistributeStart size={24} color="currentColor" strokeWidth={2} />;
}
```

Props suportadas (semelhante ao Lucide):

- `size`: number|string (default 24)
- `color`: string (default currentColor)
- `strokeWidth`: number|string (default 2)
- `absoluteStrokeWidth`: boolean
- Demais props `SVGAttributes<SVGElement>`

## Configuração (figma.config.json)

Você pode apontar para IDs específicos (`nodeIds`) ou informar diretamente um link de um frame (`frameUrl`).

- Exemplo com link do frame (todos os filhos do frame serão baixados como SVGs):

```json
{
	"frameUrl": "https://www.figma.com/design/FILE_KEY/NOME?node-id=1-2",
	"scale": 1
}
```

- Exemplo com fileKey + nodeIds:

```json
{
	"fileKey": "SEU_FILE_KEY",
	"nodeIds": ["1:2", "1:3"],
	"scale": 1
}
```

## Fluxo (Figma -> SVG -> Componentes)

1. Configure `figma.config.json` com `frameUrl` OU com `fileKey` + `nodeIds`.
2. Exporte SVGs automaticamente:

```bash
npm run sync:figma
```

3. Gere os componentes React a partir dos SVGs:

```bash
npm run generate
```

4. Faça o build do pacote:

```bash
npm run build
```

## Scripts

- `sync:figma`: baixa SVGs do Figma para `icons/svg` (por `frameUrl` ou `nodeIds`)
- `generate`: converte SVGs para componentes em `src/icons`
- `build`: empacota ESM/CJS + tipos

## Licença

MIT © Bruno Pinheiro
