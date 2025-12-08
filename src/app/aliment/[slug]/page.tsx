import { foods } from "@/data/data";
import type { Metadata } from "next";
import type { IFood } from "@/type/index";
import PieChartWithPaddingAngle from "./charts";
import Image from "next/image";
import ComboBox from "@/composant-projet/ComboBox";
export type DataType = {
    name: string,
    value?: number,
    fill: string
}

export function generateStaticParams() {
    return foods.map((food) => ({
        slug: food.name.toLowerCase().replace(/ /g, "-")
    }));
}

export async function generateMetadata({params}: {params: Promise<{slug: string}>}): Promise<Metadata> {
    const { slug } = await params;
    const aliment = slug.replaceAll("-", " ");
    return {
        title: `Aliment - ${aliment}`,
    };
}   

export default async function AlimentPage({params}: {params: Promise<{slug: string}>}) {
    const { slug } = await params;
    const aliment = slug.replaceAll("-", " ");
    const food: IFood | undefined = foods.find((food) => food.name.toLowerCase() === aliment.toLowerCase());
    if(!food) throw new Error("Aliment not found");
    const data: DataType[] = [
        {name : "calories", value: food.calories, fill: "#0088FE"},
        {name : "carbohydrates", value: food.carbohydrates, fill: "#00C49F"},
        {name : "protein", value: food.protein, fill: "#FFBB28"},
        {name : "fat", value: food.fat, fill: "#FF8042"},
        {name : "fiber", value: food.fiber, fill: "#000000"},
        {name : "sugar", value: food.sugar, fill: "#EE0606"},
    ]
    return (
      <main className="flex flex-col justify-center items-center mt-5 mb-10">
        <section className="pb-5">
            <ComboBox />
        </section>
        <section className="flex flex-col sm:flex-row gap-10">
            <div style={{width: 300, minHeight: 300}} className="flex items-center">
                <PieChartWithPaddingAngle data={data} />    
            </div>
            <div>
                <h1 className="font-semibold pb-2 text-4xl mb-5">Aliment {food.name}</h1>
                <ul className="flex flex-col gap-y-2">
                    {data.map((data, index) => {
                        return (
                        <li key={index} className="">
                            <div className="flex items-center gap-x-2">
                                <div className="size-6" style={{backgroundColor: `${data.fill}`}}></div> 
                                <div>{data.name}</div>
                            </div>
                        </li>
                        );
                    })}
                </ul>
                <div className="pt-5">
                    <div className="flex gap-5">
                        <Image src="/vitamins.png" alt="minerals" width={50} height={50} />
                        <div className="flex gap-5 items-center">
                            <div>{food.vitamins?.[0]}</div>
                            <div className="">{food.vitamins?.[1]}</div>
                        </div>
                    </div>
                    <div className="flex gap-5">
                        <Image src="/minerals.png" alt="minerals" width={50} height={50} />
                        <div className="flex gap-5 items-center">
                            <div>{food.minerals?.[0]}</div>
                            <div>{food.minerals?.[1]}</div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    </main>
    );
}