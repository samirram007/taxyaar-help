import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import { Card, CardContent } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { UserAuthForm } from './components/user-auth-form'
import { Link } from '@tanstack/react-router'

export default function SignIn() {
  return (
    <div className="body bg-slate-100/70! text-slate-800!">
      <Header />

      <main className="pb-12!">
        <section className="container px-4! pt-14! pb-8!">
          <Card className="mx-auto! w-full! max-w-2xl! border-0! bg-transparent! py-0! shadow-none!">
            <CardContent className="p-0!">
              <div className="text-center!">
                <h1 className="text-[42px]! leading-tight! font-semibold! text-slate-800!">
                  Sign up to Taxyaar Income tax efiling
                </h1>
                <p className="mt-2! text-sm! text-slate-500!">
                  Login to Taxyaar income tax return filing account
                </p>
              </div>

              <div className="mt-7! rounded-md! border! border-slate-200! bg-blue-50/70! p-3!">
                <p className="text-sm! font-semibold! text-slate-600! mb-3!">
                  Email Login
                </p>
                <p className="text-xs! leading-relaxed! text-slate-500! mb-3!">
                  Use your email and password to login or{' '}
                  <Link to="/sign-up" className="font-medium! text-sky-600!">
                    sign up
                  </Link>{' '}
                  as a new user.
                </p>
              </div>

              <GoogleSignInDivider />

              <UserAuthForm className="mt-0!" />

              <p className="mt-5! text-center! text-sm! text-slate-500!">
                Don&apos;t have an account yet?
              </p>

              <div className="mt-2! text-center!">
                <Link
                  to="/sign-up"
                  className="inline-flex! rounded-sm! bg-blue-50! px-6! py-2! text-sm! font-semibold! text-sky-600! hover:bg-blue-100!"
                >
                  New User? Sign up here
                </Link>
              </div>
            </CardContent>
          </Card>
        </section>

        <section className="container px-4! pt-6! pb-14!">
          <h2 className="mb-8! text-center! text-5xl! font-semibold! text-slate-800!">
            Common Questions
          </h2>

          <Card className="mx-auto! w-full! max-w-4xl! gap-0! rounded-sm! border! border-slate-200! bg-white/80! py-0! shadow-none!">
            <CardContent className="p-0!">
              <Accordion
                type="single"
                collapsible
                defaultValue="q-1"
                className="w-full!"
              >
                {faqItems.map((item, idx) => (
                  <AccordionItem
                    key={item.question}
                    value={`q-${idx + 1}`}
                    className="border-slate-200!"
                  >
                    <AccordionTrigger className="px-6! py-5! text-base! font-semibold! text-slate-800! hover:no-underline! [&>svg]:size-4! [&>svg]:text-sky-600!">
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent className="px-6! pb-5! text-base! leading-7! text-slate-600!">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>
        </section>
      </main>

      <Footer />
    </div>
  )
}

const faqItems = [
  {
    question: 'Is Taxyaar authorised eRI by incometax.gov.in?',
    answer:
      'Yes. Taxyaar is the oldest eRI of the Income Tax Department and the site can help you file your income-tax return quickly and accurately.',
  },
  {
    question: 'Is my data safe with Taxyaar?',
    answer:
      'Yes. Taxyaar follows secure standards and encryption to protect your profile and tax filing information.',
  },
  {
    question: 'What if I forget my username or password?',
    answer:
      'Use the Forgot Password option on this page. You can recover access through your registered email.',
  },
  {
    question: 'What if Google Sign In does not work?',
    answer:
      'Some systems block popup sign-in. You can still continue with your email and password login on this page.',
  },
  {
    question:
      'Do I have to enter my Income-tax website credentials on this page?',
    answer: 'No. You only need your Taxyaar account login for this step.',
  },
]

const GoogleSignInDivider = () => {
  return (
    <div className="my-6! grid! grid-cols-[1fr_auto_1fr]! items-center! gap-3!">
      <Separator className="bg-slate-300!" />
      <div className="text-sm! font-semibold! tracking-wide! text-slate-500!">
        OR
      </div>
      <Separator className="bg-slate-300!" />
    </div>
  )
}
