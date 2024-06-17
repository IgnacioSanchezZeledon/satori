import ContactForm from "./ContactForm";

export default function ContactPart() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black  via-zinc-700 to-black px-6 md:px-16 py-12">
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="px-2 py-5 font-poppins">
          <h1 className="text-5xl md:text-6xl text-center py-5 tracking-tight bg-white bg-clip-text text-transparent">
            Contáctanos
          </h1>
          <h2 className="text-xl md:text-2xl py-5 px-4 md:px-20 text-white text-center tracking-tight">
            ¿Tienes algún proyecto o idea? ¡Escríbenos!
          </h2>
        </div>
        <div className="md:py-12">
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
