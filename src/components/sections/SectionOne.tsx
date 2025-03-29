export default function SectionOne() {
  return (
    <section className="h-auto flex flex-col text-white bg-white">
      <img className="w-full" src="/images/sectionOne.png" alt="" />
      <div className="flex flex-col items-center">
        <h1
          className="text-color1 text-6xl font-mono tracking-[10px] max-md:text-5xl max-md:tracking-[5px]
          max-sm:text-4xl max-sm:tracking-[3px]"
        >
          Fábio & Verena
        </h1>
        <p className="text-color1 mt-14 tracking-[7px] text-xl max-md:text-lg max-md:tracking-[3px] max-md:mt-7
          max-sm:text-base max-sm:tracking-[2px]"
        >
          30 DE AGOSTO DE 2025
        </p>
      </div>
    </section>
  )
}