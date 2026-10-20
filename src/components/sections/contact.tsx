import { useState, type FormEvent } from "react";
import { Send } from "lucide-react";

interface ContactForm {
  name: string;
  email: string;
  message: string;
}

const initialForm: ContactForm = {
  name: "",
  email: "",
  message: "",
};

export default function Contact() {
  const [form, setForm] = useState<ContactForm>(initialForm);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const recipient = "your-email@example.com";

    const subject = encodeURIComponent(`Portfolio inquiry from ${form.name}`);

    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`,
    );

    window.location.href = `mailto:${recipient}?subject=${subject}&body=${body}`;
  }

  function updateField(field: keyof ContactForm, value: string) {
    setForm((previous) => ({
      ...previous,
      [field]: value,
    }));
  }

  return (
    <section id="contact" className=" pb-20">
      <div className="mb-10 text-center">
        <p className="mb-3 text-sm font-semibold tracking-[0.2em] text-teal-400 uppercase">
          Let's connect
        </p>

        <h2 className="text-3xl font-bold sm:text-4xl">
          Contact Me<span className="text-teal-400">.</span>
        </h2>

        <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-slate-400">
          Have a job opportunity, collaboration, or project in mind? I'd be
          happy to hear from you.
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="mx-auto grid w-full max-w-xl gap-5 rounded-xl border border-slate-800 bg-slate-900/60 p-5 sm:p-8"
      >
        <div className="grid gap-2">
          <label htmlFor="name" className="text-sm font-medium text-slate-300">
            Your name
          </label>

          <input
            id="name"
            name="name"
            autoComplete="name"
            value={form.name}
            onChange={(event) => updateField("name", event.target.value)}
            placeholder="Enter your name"
            required
            className="h-12 rounded-md border border-slate-700 bg-slate-800 px-4 text-sm text-white placeholder:text-slate-500 focus:border-teal-500 focus:outline-none focus:ring-1 focus:ring-teal-500"
          />
        </div>

        <div className="grid gap-2">
          <label htmlFor="email" className="text-sm font-medium text-slate-300">
            Email address
          </label>

          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            value={form.email}
            onChange={(event) => updateField("email", event.target.value)}
            placeholder="you@example.com"
            required
            className="h-12 rounded-md border border-slate-700 bg-slate-800 px-4 text-sm text-white placeholder:text-slate-500 focus:border-teal-500 focus:outline-none focus:ring-1 focus:ring-teal-500"
          />
        </div>

        <div className="grid gap-2">
          <label
            htmlFor="message"
            className="text-sm font-medium text-slate-300"
          >
            Message
          </label>

          <textarea
            id="message"
            name="message"
            value={form.message}
            onChange={(event) => updateField("message", event.target.value)}
            placeholder="Tell me about your opportunity..."
            rows={5}
            required
            className="resize-y rounded-md border border-slate-700 bg-slate-800 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:border-teal-500 focus:outline-none focus:ring-1 focus:ring-teal-500"
          />
        </div>

        <button className="rounded-md flex items-center justify-center gap-1 h-12 w-full bg-teal-600 text-white hover:bg-teal-700">
          <span>Send message</span>
          <Send className="ml-2 size-4" />
        </button>

        <p className="text-center text-xs leading-5 text-slate-500">
          Your email application will open with your message prepared.
        </p>
      </form>
    </section>
  );
}
