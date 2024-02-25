import { useState } from 'react'
import reactLogo from '../../../images/react.svg'
import viteLogo from '../../../images/vite.svg'
import nestLogo from '../../../images/nest.svg'
import tsLogo from '../../../images/ts.png'
import dockerLogo from '../../../images/docker.png'
import tailwind from '../../../images/tailwind.svg'
import Counter from './components/Counter'
import { useAppSelector } from '../../store/hooks'
import Detail from './components/Detail'
import { IDetail, IItem } from '../../interfaces/detail.model'

const HomeView = () => {
    const count = useAppSelector((state) => state.counter.count)

    const back: IDetail = {
        logo: nestLogo,
        title: "NestJs",
        items: [
            { title: "Database", value: "Postgresql" },
            { title: "ORM", value: "TypeORM" },
            { title: "API", value: "Graphql" },
        ] as IItem[]
    }

    const front: IDetail = {
        logo: reactLogo,
        title: "React",
        items: [
            { title: "Store", value: "Redux" },
            { title: "API", value: "Graphql" },
        ] as IItem[]
    }
    return (
        <div className="flex justify-center items-center h-screen">
            <div className="p-4">
                <div className="flex justify-center items-center gap-6 py-10">
                    <a href="https://vitejs.dev" target="_blank">
                        <img src={viteLogo} className="w-24" alt="Vite logo" />
                    </a>
                    <a href="https://react.dev" target="_blank">
                        <img src={reactLogo} className="w-24" alt="React logo" />
                    </a>
                    <a href="https://nestjs.com/" target="_blank">
                        <img src={nestLogo} className="w-24" alt="Nest logo" />
                    </a> 
                    <a href="https://www.typescriptlang.org/" target="_blank">
                        <img src={tsLogo} className="w-24" alt="Typescript logo" />
                    </a>
                    <a href="https://www.docker.com/" target="_blank">
                        <img src={dockerLogo} className="w-24" alt="Docker logo" />
                    </a>
                </div>
                <h1>Vite + React + Nestjs + Typescript + Docker</h1>

                <div className="hidden:flex-col p-2 md:flex md:justify-between md:items-center mt-6">
                    <Detail detail={back}/>
                    <div className="flex flex-col justify-center items-center">
                        <h1 className="text-xl mb-3">With Framework css Tailwind</h1>
                        <a href="https://tailwindcss.com/" target="_blank" className="text-center">
                            <img src={tailwind} className="w-24" alt="Tailwind logo" />
                        </a>
                    </div>
                    <Detail detail={front}/>
                </div>
                
                <div className="text-center">
                    <Counter/>
                </div>
                <h1 className="text-center">{ count }</h1>
            </div>
        </div>
    )
}

export default HomeView;