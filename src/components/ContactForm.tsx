import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Send, Loader2 } from "lucide-react";

const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(1, { message: "Meno je povinné" })
    .max(100, { message: "Meno musí mať menej ako 100 znakov" }),
  email: z
    .string()
    .trim()
    .email({ message: "Neplatná emailová adresa" })
    .max(255, { message: "Email musí mať menej ako 255 znakov" }),
  phone: z
    .string()
    .trim()
    .max(20, { message: "Telefón musí mať menej ako 20 znakov" })
    .optional()
    .or(z.literal("")),
  message: z
    .string()
    .trim()
    .min(1, { message: "Správa je povinná" })
    .max(1000, { message: "Správa musí mať menej ako 1000 znakov" }),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export const ContactForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  const onSubmit = async (values: ContactFormValues) => {
    setIsSubmitting(true);

    try {
      const { error } = await supabase.from("contacts").insert([
        {
          name: values.name,
          email: values.email,
          phone: values.phone || null,
          message: values.message,
        },
      ]);

      if (error) throw error;

      toast({
        title: "Správa odoslaná!",
        description: "Ďakujeme za vašu správu. Čoskoro vás budeme kontaktovať.",
      });

      form.reset();
    } catch (error) {
      console.error("Error submitting form:", error);
      toast({
        title: "Chyba",
        description: "Nepodarilo sa odoslať správu. Skúste to prosím znova.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

    return (

      <section id="contact" className="py-24 bg-gradient-subtle">

        <div className="container mx-auto px-4 lg:px-8">

          <div className="max-w-2xl mx-auto">

            <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-display font-bold mb-4 text-foreground">
              Kontaktujte Nás
            </h2>
            <p className="text-xl text-textSecondary">
              Máte otázky? Radi vám poradíme s výberom správneho kotla
            </p>
          </div>

          <div className="bg-card p-8 rounded-lg border border-border shadow-sm">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-6"
              >
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Meno *</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Vaše meno"
                          {...field}
                          disabled={isSubmitting}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email *</FormLabel>
                      <FormControl>
                        <Input
                          type="email"
                          placeholder="vas@email.sk"
                          {...field}
                          disabled={isSubmitting}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Telefón</FormLabel>
                      <FormControl>
                        <Input
                          type="tel"
                          placeholder="+421 xxx xxx xxx"
                          {...field}
                          disabled={isSubmitting}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Správa *</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Napíšte nám vašu správu..."
                          className="min-h-[150px] resize-none"
                          {...field}
                          disabled={isSubmitting}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button
                  type="submit"
                  className="w-full"
                  disabled={isSubmitting}
                  size="lg"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Odosielam...
                    </>
                  ) : (
                    <>
                      <Send className="mr-2 h-4 w-4" />
                      Odoslať správu
                    </>
                  )}
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
};
