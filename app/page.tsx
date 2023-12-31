import NextLink from "next/link";
import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code";
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import { Textarea } from "@nextui-org/input";
import { Input } from "@nextui-org/input";
import { RadioGroup, Radio } from "@nextui-org/radio";
import { ThemeSwitch } from "@/components/theme-switch";
import SignatureDraw from "../components/signaturedraw";


export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
	  <ThemeSwitch />
    	
      <div className="inline-block max-w-lg text-center justify-center">
        <h1 className={title()}>Aspectos&nbsp;</h1>
        <h1 className={title()}>a&nbsp;</h1>
        <h1 className={title({ color: "violet" })}>considerar&nbsp;</h1>
        <br />
        <h1 className={title()}>formulario</h1>
      </div>
      <div className=" bg-zinc-200 dark:bg-zinc-900 py-7 px-4 rounded-lg border-purple-500 dark:border-zinc-500 border-1 w-full h-max">
        <h2 className={subtitle()}>Plan de Mejora y desarrollo personal </h2>
        <div className="flex w-full flex-wrap md:flex-wrap gap-4 mb-4">
          <p>Puntos Fuertes</p>
          <Input
            isRequired
            type="text"
            label="Punto 1"
            placeholder="Escribe un punto fuerte"
          />
          <Input
            isRequired
            type="text"
            label="Punto 2"
            placeholder="Escribe un punto fuerte"
          />
          <Input
            isRequired
            type="text"
            label="Punto 3"
            placeholder="Escribe un punto fuerte"
          />
          <Input
            isRequired
            type="text"
            label="Punto 4"
            placeholder="Escribe un punto fuerte"
          />
        </div>
        <div className="flex w-full flex-wrap md:flex-wrap gap-4 mb-4">
          <p>Areas de Mejora</p>
          <Input
            isRequired
            type="text"
            label="Area 1"
            placeholder="Escribe un area a mejorar"
          />
          <Input
            isRequired
            type="text"
            label="Area 2"
            placeholder="Escribe un area a mejorar"
          />
          <Input
            isRequired
            type="text"
            label="Area 3"
            placeholder="Escribe un area a mejorar"
          />
          <Input
            isRequired
            type="text"
            label="Area 4"
            placeholder="Escribe un area a mejorar"
          />
        </div>
        <div className="flex w-full flex-wrap md:flex-wrap gap-4 mb-4">
          <p>Recomendaciones</p>
          <Textarea isRequired label="De Formación" />
          <Textarea label="De otra clase" />
        </div>

        <div className="flex w-full flex-wrap md:flex-wrap gap-4 mb-4">
          <p>Entorno - Condiciones de Trabajo</p>
          <Textarea
            isRequired
            label="Señale aquellos elementos que han distorcionado el desempeño del/de la servidor/a"
          />
          <Textarea label="Señale otras cuestiones dirigidas a incrementar la motivación y la satisfacción profesional del/de la servidora/a" />
        </div>
        <div className="flex w-full flex-wrap md:flex-wrap gap-4 mb-4">
          <p>Comentarios de la persona evaluada</p>
          <Textarea isRequired label="Escriba sus comentarios aqui" />
        </div>

        <div className="flex-col w-full flex-wrap md:flex-wrap gap-4 mb-4">
          <p>Conforme con la calificación y el plan de mejora</p>

          <RadioGroup
            label="Selecciona si estás de acuerdo o no"
            orientation="horizontal"
          >
            <Radio value="Estoy de acuerdo">Estoy de acuerdo</Radio>
            <Radio value="No estoy de acuerdo">No estoy de acuerdo</Radio>
          </RadioGroup>
        </div>

		<div className="flex-col w-full flex-wrap md:flex-wrap gap-4 mb-4">
			<Input
				isRequired
				type="date"
				label="fecha"
			/>
		</div>

		<div className="flex gap-4 mb-4">
			<SignatureDraw />
      <SignatureDraw />
		</div>

      </div>
    </section>
  );
}
