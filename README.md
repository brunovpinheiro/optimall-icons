# Optimall Icons

Biblioteca de ícones do Optimall para React, com mais de 200 ícones otimizados e prontos para uso.

## 🚀 Como Instalar

### NPM

```bash
npm install optimall-icons
```

### Yarn

```bash
yarn add optimall-icons
```

## 📦 Como Usar

### Importação Individual (Recomendado)

```jsx
import { HomeIcon, UserIcon, SearchIcon } from "optimall-icons";

function App() {
	return (
		<div>
			<HomeIcon />
			<UserIcon />
			<SearchIcon />
		</div>
	);
}
```

### Importação Completa

```jsx
import * as Icons from "optimall-icons";

function App() {
	return (
		<div>
			<Icons.HomeIcon />
			<Icons.UserIcon />
		</div>
	);
}
```

## ⚙️ Configurações dos Ícones

### Propriedades Disponíveis

Todos os ícones suportam as seguintes propriedades:

| Propriedade      | Tipo            | Padrão           | Descrição                           |
| ---------------- | --------------- | ---------------- | ----------------------------------- |
| `size`           | `string/number` | `24`             | Tamanho do ícone (width e height)   |
| `className`      | `string`        | -                | Classes CSS personalizadas          |
| `style`          | `object`        | -                | Estilos CSS inline                  |
| `ariaLabel`      | `string`        | Nome do ícone    | Label para acessibilidade           |
| `width`          | `string/number` | `size`           | Largura do ícone (sobrescreve size) |
| `height`         | `string/number` | `size`           | Altura do ícone (sobrescreve size)  |
| `fill`           | `string`        | `"currentColor"` | Cor de preenchimento                |
| Outras props SVG | -               | -                | Qualquer propriedade SVG válida     |

### Exemplos de Configuração

#### Alterando Tamanho

```jsx
// Nova propriedade size (recomendado) ✨
<HomeIcon size={24} />        // 24x24 (padrão)
<HomeIcon size={32} />        // 32x32
<HomeIcon size="2rem" />      // 2rem x 2rem

// Tamanho específico (width e height sobrescrevem size)
<HomeIcon width={40} height={20} />  // 40x20 (retângulo)
<HomeIcon size={32} width={40} />    // 40x32 (width sobrescreve)

// Usando CSS
<HomeIcon style={{ width: '2rem', height: '2rem' }} />

// Com className
<HomeIcon className="w-8 h-8" />
```

#### Alterando Cor

```jsx
// Cor específica
<HomeIcon style={{ color: '#3B82F6' }} />

// Usando CSS
<HomeIcon className="text-blue-500" />

// Cor de preenchimento direta
<HomeIcon fill="#ef4444" />
```

#### Customização Avançada

```jsx
<UserIcon
	size={40}
	className="user-icon"
	style={{
		color: "#10B981",
		cursor: "pointer",
		transition: "color 0.2s",
	}}
	ariaLabel="Perfil do usuário"
	onClick={() => console.log("Clicado!")}
/>
```

### Responsividade

Os ícones são vetoriais e se adaptam perfeitamente a diferentes tamanhos:

```jsx
// Responsivo com Tailwind CSS
<HomeIcon className="w-4 h-4 sm:w-6 sm:h-6 lg:w-8 lg:h-8" />

// Responsivo com CSS
<HomeIcon
  style={{
    width: 'clamp(16px, 4vw, 32px)',
    height: 'clamp(16px, 4vw, 32px)'
  }}
/>

// Responsivo usando size (mais simples) ✨
<HomeIcon size="clamp(16px, 4vw, 32px)" />
```

### Acessibilidade

Todos os ícones incluem suporte completo à acessibilidade:

```jsx
// Label automático baseado no nome do ícone
<SearchIcon /> // aria-label="search"

// Label personalizado
<SearchIcon ariaLabel="Buscar produtos" />

// Ícone decorativo (sem label)
<SearchIcon ariaLabel="" />
```

## 📄 Licença

MIT © Bruno Pinheiro - UI Designer @ Optimall

## 🔗 Links

- [Homepage](https://www.podiapp.com.br/)

---

Feito com ❤️ pela equipe Optimall
