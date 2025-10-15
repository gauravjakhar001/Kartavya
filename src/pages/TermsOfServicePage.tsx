import Header from "@/components/Header";
import Footer from "@/components/Footer";

const TermsOfServicePage = () => {
    return (
        <div className="bg-background text-foreground flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow pt-20">
                <section className="py-12 md:py-20">
                    <div className="container mx-auto px-4 md:px-6 max-w-4xl">
                        <h1 className="text-4xl font-bold tracking-tight mb-4">
                            Terms of Service
                        </h1>
                        <p className="text-muted-foreground mb-8">
                            Last updated: June 15, 2025
                        </p>

                        <div className="space-y-6">
                            <div>
                                <h2 className="text-2xl font-semibold mb-2">
                                    1. Agreement to Terms
                                </h2>
                                <p className="text-muted-foreground">
                                    By using our Services, you agree to be bound
                                    by these Terms. If you don’t agree to be
                                    bound by these Terms, do not use the
                                    Services. These Terms of Service ("Terms")
                                    govern your access to and use of the website
                                    and services of Kartavya Technology ("we",
                                    "us", or "our").
                                </p>
                            </div>

                            <div>
                                <h2 className="text-2xl font-semibold mb-2">
                                    2. Use of Our Services
                                </h2>
                                <p className="text-muted-foreground">
                                    You may use our Services only if you can
                                    form a binding contract with Kartavya
                                    Technology, and only in compliance with
                                    these Terms and all applicable laws. When
                                    you create your account, you must provide us
                                    with accurate and complete information. You
                                    are responsible for safeguarding your
                                    account, so use a strong password and limit
                                    its use to this account.
                                </p>
                            </div>

                            <div>
                                <h2 className="text-2xl font-semibold mb-2">
                                    3. Intellectual Property
                                </h2>
                                <p className="text-muted-foreground">
                                    The Service and its original content,
                                    features, and functionality are and will
                                    remain the exclusive property of Kartavya
                                    Technology and its licensors. The Service is
                                    protected by copyright, trademark, and other
                                    laws of both India and foreign countries.
                                    Our trademarks and trade dress may not be
                                    used in connection with any product or
                                    service without the prior written consent of
                                    Kartavya Technology.
                                </p>
                            </div>

                            <div>
                                <h2 className="text-2xl font-semibold mb-2">
                                    4. Termination
                                </h2>
                                <p className="text-muted-foreground">
                                    We may terminate or suspend your account and
                                    bar access to the Service immediately,
                                    without prior notice or liability, under our
                                    sole discretion, for any reason whatsoever
                                    and without limitation, including but not
                                    limited to a breach of the Terms.
                                </p>
                            </div>

                            <div>
                                <h2 className="text-2xl font-semibold mb-2">
                                    5. Limitation of Liability
                                </h2>
                                <p className="text-muted-foreground">
                                    In no event shall Kartavya Technology, nor
                                    its directors, employees, partners, agents,
                                    suppliers, or affiliates, be liable for any
                                    indirect, incidental, special, consequential
                                    or punitive damages, including without
                                    limitation, loss of profits, data, use,
                                    goodwill, or other intangible losses,
                                    resulting from your access to or use of or
                                    inability to access or use the Service.
                                </p>
                            </div>

                            <div>
                                <h2 className="text-2xl font-semibold mb-2">
                                    6. Governing Law
                                </h2>
                                <p className="text-muted-foreground">
                                    These Terms shall be governed and construed
                                    in accordance with the laws of Karnataka,
                                    India, without regard to its conflict of law
                                    provisions.
                                </p>
                            </div>

                            <div>
                                <h2 className="text-2xl font-semibold mb-2">
                                    7. Changes to Terms
                                </h2>
                                <p className="text-muted-foreground">
                                    We reserve the right, at our sole
                                    discretion, to modify or replace these Terms
                                    at any time. If a revision is material we
                                    will provide at least 30 days' notice prior
                                    to any new terms taking effect. What
                                    constitutes a material change will be
                                    determined at our sole discretion.
                                </p>
                            </div>

                            <div>
                                <h2 className="text-2xl font-semibold mb-2">
                                    8. Contact Us
                                </h2>
                                <p className="text-muted-foreground">
                                    If you have any questions about these Terms,
                                    please contact us at:{" "}
                                    <a
                                        href="mailto:contact@kartavya.tech"
                                        className="text-primary hover:underline"
                                    >
                                        contact@kartavya.tech
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default TermsOfServicePage;
