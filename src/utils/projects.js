import arte from '../assets/projects/arte.png'
import br from '../assets/projects/br-finanças.png'
import patinhas from '../assets/projects/patinhas-felizes.png'
import advice from '../assets/projects/advice.png'
import splitter from '../assets/projects/splitter.png'
import marmoraria from "../assets/projects/marmoraria.png"
import pokedex from "../assets/projects/pokedex.png"


export const projects = [
    {
        title: "Pokédex",
        subtitle: {
            pt: "Uma Pokédex simples e fácil de usar. Possui a opção de buscar pokémons por nome, habitat ou tipo; além dos três combinados.",
            en: "A simple and easy-to-use Pokédex. It has the option to search for pokémons by name, habitat or type; in addition to the three combined."
        },
        git: "https://github.com/BeatrizNeaime/pokedex",
        path: "https://pokedex-seven-inky.vercel.app",
        technologies: ["React", "Styled-Components", "PokéAPI", "Context API"],
        img: pokedex
    },
    {
        title: "Arte de Caderno",
        subtitle: {
            pt: "Um site para um campeonato local de desenho e pintura por alunos de escolas públicas. Tema do meu Trabalho de Conclusão de Curso.",
            en: "A website for a local drawing and painting championship by public school students. Theme of my Final Course Work."
        },
        technologies: ["React", "Styled-Components"],
        path: "https://artedecaderno.ifsuldeminas.edu.br",
        git: "https://github.com/ArtedeCaderno-IFSULDEMINAS/Arte-de-Caderno",
        img: arte
    },
    {
        title: "Marmoraria dos Irmãos",
        subtitle: {
            pt: "Um site para uma marmoraria local. ",
            en: "A website for a local marble shop."
        },
        technologies: ["WordPress"],
        path: "https://www.marmorariadosirmaos.com.br",
        git: null,
        img: marmoraria
    },
    {
        title: "Patinhas Felizes",
        subtitle: {
            pt: "Um site de gerenciamento e controle de animais de um abrigo fictício. Como este projeto foi feito como projeto interdisciplinar, o link do deploy não está disponível.",
            en: "A management and control website for animals in a fictitious shelter. As this project was made as an interdisciplinary project, the deploy link is not available."
        },
        technologies: ["HandleBars", "Express", "MySQL"],
        path: null,
        git: "https://github.com/BeatrizNeaime/PatinhasFelizes",
        img: patinhas
    },
    {
        title: "BR Finanças",
        subtitle: {
            pt: "Um website para controle financeiro. Como este projeto foi feito como projeto interdisciplinar, o link do deploy não está disponível.",
            en: "A financial control website. As this project was made as an interdisciplinary project, the deploy link is not available."
        },
        technologies: ["HandleBars", "Express", "MySQL"],
        path: null,
        git: "https://github.com/BeatrizNeaime/BR-financas",
        img: br
    },
    {
        title: "Advice",
        subtitle: {
            pt: "Precisa de um conselho? Experimente este aplicativo.",
            en: "Need advice? Try this app."
        },
        technologies: ["React", "TailwindCSS"],
        path: "https://imaginative-paletas-b1d609.netlify.app",
        git: "https://github.com/BeatrizNeaime/advice.github.io",
        img: advice
    },
    {
        title: "Splitter",
        subtitle: {
            pt: "Já esteve em um bar com os amigos e não sabia como dividir a conta? Este aplicativo é para você. Simples e fácil de usar.",
            en: "Have you ever been in a bar with friends and didn't know how to split the bill? This app is for you. Simple and easy to use."
        },
        technologies: ["React", "TailwindCSS"],
        path: "https://fm-tip-calculator-pi.vercel.app",
        git: "https://github.com/BeatrizNeaime/FM-tip-calculator",
        img: splitter
    }
]