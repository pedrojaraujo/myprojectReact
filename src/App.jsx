import './App.css'
import { useState, useEffect } from 'react'

const App = () => {

    const [myImage, setMyImage] = useState(null)

    useEffect(() => {
        fetch('https://media.licdn.com/dms/image/D4D03AQFgMrIiBJGP9A/profile-displayphoto-shrink_800_800/0/1682284281277?e=1687996800&v=beta&t=Brrc9FdvEZogQzIlKmhkXqIlm3r0Q1nxniYSfG_sXJ8').then(response => response.blob()).then(blob => {
            const objectUrl = URL.createObjectURL(blob)
            setMyImage(objectUrl)
        })
    }, [])

    return (
        <>
            <header className='max-sm: flex-col max-sm: m-10 max-md: flex max-md: justify-around max-md: items-center max-md: mx-10'>
                <figure>
                    {myImage ? <img className=' w-40 rounded-full sm: my-10' src={myImage} alt='eu' /> : <p>Carregando imagem...</p>}
                </figure>
                <section className='sm:my-10 lg:m-10'>
                    <h1 className='text-3xl'>Pedro Joaquim Araujo</h1>
                    <h3>jr. developer frontend</h3>
                </section>
                <section className='inline-flex'>
                    <ul className='inline-flex'>
                        <li><button className='md: p-5 hover:rounded-full hover:bg-gray-700 duration-500 hover:text-white'>Sobre mim</button></li>
                        <li><button className='md: p-5 hover:rounded-full hover:bg-gray-700 duration-500 hover:text-white'>Projetos</button></li>
                        <li><button className='md: p-5 hover:rounded-full hover:bg-gray-700 duration-500 hover:text-white'>Contatos</button></li>
                    </ul>
                </section>
            </header>

            <main className='flex flex-col justify-center font-SourceCodePro'>

                <section className="sobreMim md:w-2/4 sm:w-3/4">
                    <h1 className='flex justify-start md:ms-20 text-xl sm: mx-10 max-sm: my-10'>Um pouco sobre mim</h1>
                    <p className='text-left md:ms-20 mx-10'>Sou um desenvolvedor front-end apaixonado por tecnologia e sempre dedicado a aprender continuamente. Minhas habilidades são concentradas em HTML, CSS, JavaScript, React.js e TypeScript, nas quais venho me especializando.<br />Com uma sede insaciável por conhecimento, estou sempre em busca de oportunidades para expandir minhas habilidades e crescer como desenvolvedor. Estou motivado, dedicado e ávido por aprender, por isso, se você procura alguém assim, eu sou a escolha certa. Estou sempre pronto para enfrentar novos desafios e aprender com novas experiências.</p>

                </section>
                <section className='m-20'>
                    <h1 className='flex justify-start text-xl'>Projetos</h1>
                    <section >
                        <ul className='grid  min-sm: grid-col min-sm: grid-cols-2'>
                            <li className='box-border h-32 w-32'><a href="https://pedrojaraujo.github.io/killFlies/"><img src="../public/img/killFlies.png" alt="Killflies" />Killflies</a></li>
                            <li className='box-border h-32 w-32'><a href="https://pedrojaraujo.github.io/orcamentoPessoal/"><img src="../public/img/orcamentoPessoal.png" alt="Killflies" />Orçamento Pessoal</a></li>
                            <li className='box-border h-32 w-32'><a href="https://pedrojaraujo.github.io/project-finans/"><img src="../public/img/finans.png" alt="Killflies" />Projeto Finans</a></li>
                            <li className='box-border h-32 w-32'><a href="https://pedrojaraujo.github.io/storyteller/"><img src="../public/img/storyTeller.png" alt="storyteller" />Story Teller</a></li>
                            <li className='box-border h-32 w-32'><a href="https://pedrojaraujo.github.io/weatherApp/"><img src="../public/img/weatherApp.png" alt="weatherapp" />Weather App</a></li>
                        </ul>
                    </section>
                </section>
            </main>
        </>
    )
}

export default App