import Header from "@/components/Header";
import Footer from "@/components/Footer";

const PrivacyPolicyPage = () => {
    return (
        <div className="bg-background text-foreground flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow pt-20">
                <section className="py-12 md:py-20">
                    <div className="container mx-auto px-4 md:px-6 max-w-4xl">
                        <h1 className="text-4xl font-bold tracking-tight mb-4">
                            Privacy Policy
                        </h1>
                        <p className="text-muted-foreground mb-8">
                            Last updated: June 15, 2025
                        </p>

                        <div className="space-y-6">
                            <div>
                                <h2 className="text-2xl font-semibold mb-2">
                                    1. Introduction
                                </h2>
                                <p className="text-muted-foreground">
                                    Welcome to Kartavya Technology. We are
                                    committed to protecting your privacy. This
                                    Privacy Policy explains how we collect, use,
                                    disclose, and safeguard your information
                                    when you visit our website and use our
                                    services. Please read this privacy policy
                                    carefully. If you do not agree with the
                                    terms of this privacy policy, please do not
                                    access the site.
                                </p>
                            </div>

                            <div>
                                <h2 className="text-2xl font-semibold mb-2">
                                    2. Information We Collect
                                </h2>
                                <p className="text-muted-foreground">
                                    We may collect information about you in a
                                    variety of ways. The information we may
                                    collect on the Site includes:
                                </p>
                                <ul className="list-disc list-inside text-muted-foreground space-y-2 mt-2">
                                    <li>
                                        <strong>Personal Data:</strong>{" "}
                                        Personally identifiable information,
                                        such as your name, shipping address,
                                        email address, and telephone number, and
                                        demographic information, such as your
                                        age, gender, hometown, and interests,
                                        that you voluntarily give to us when you
                                        register with the Site or when you
                                        choose to participate in various
                                        activities related to the Site, such as
                                        online chat and message boards.
                                    </li>
                                    <li>
                                        <strong>Derivative Data:</strong>{" "}
                                        Information our servers automatically
                                        collect when you access the Site, such
                                        as your IP address, your browser type,
                                        your operating system, your access
                                        times, and the pages you have viewed
                                        directly before and after accessing the
                                        Site.
                                    </li>
                                </ul>
                            </div>

                            <div>
                                <h2 className="text-2xl font-semibold mb-2">
                                    3. How We Use Your Information
                                </h2>
                                <p className="text-muted-foreground">
                                    Having accurate information about you
                                    permits us to provide you with a smooth,
                                    efficient, and customized experience.
                                    Specifically, we may use information
                                    collected about you via the Site to:
                                </p>
                                <ul className="list-disc list-inside text-muted-foreground space-y-2 mt-2">
                                    <li>Create and manage your account.</li>
                                    <li>
                                        Email you regarding your account or
                                        order.
                                    </li>
                                    <li>
                                        Fulfill and manage purchases, orders,
                                        payments, and other transactions related
                                        to the Site.
                                    </li>
                                    <li>
                                        Increase the efficiency and operation of
                                        the Site.
                                    </li>
                                    <li>
                                        Monitor and analyze usage and trends to
                                        improve your experience with the Site.
                                    </li>
                                </ul>
                            </div>

                            <div>
                                <h2 className="text-2xl font-semibold mb-2">
                                    4. Disclosure of Your Information
                                </h2>
                                <p className="text-muted-foreground">
                                    We may share information we have collected
                                    about you in certain situations. Your
                                    information may be disclosed as follows:
                                </p>
                                <ul className="list-disc list-inside text-muted-foreground space-y-2 mt-2">
                                    <li>
                                        <strong>
                                            By Law or to Protect Rights:
                                        </strong>{" "}
                                        If we believe the release of information
                                        about you is necessary to respond to
                                        legal process, to investigate or remedy
                                        potential violations of our policies, or
                                        to protect the rights, property, and
                                        safety of others, we may share your
                                        information as permitted or required by
                                        any applicable law, rule, or regulation.
                                    </li>
                                    <li>
                                        <strong>
                                            Third-Party Service Providers:
                                        </strong>{" "}
                                        We may share your information with third
                                        parties that perform services for us or
                                        on our behalf, including payment
                                        processing, data analysis, email
                                        delivery, hosting services, customer
                                        service, and marketing assistance.
                                    </li>
                                </ul>
                            </div>

                            <div>
                                <h2 className="text-2xl font-semibold mb-2">
                                    5. Security of Your Information
                                </h2>
                                <p className="text-muted-foreground">
                                    We use administrative, technical, and
                                    physical security measures to help protect
                                    your personal information. While we have
                                    taken reasonable steps to secure the
                                    personal information you provide to us,
                                    please be aware that despite our efforts, no
                                    security measures are perfect or
                                    impenetrable, and no method of data
                                    transmission can be guaranteed against any
                                    interception or other type of misuse.
                                </p>
                            </div>

                            <div>
                                <h2 className="text-2xl font-semibold mb-2">
                                    6. Contact Us
                                </h2>
                                <p className="text-muted-foreground">
                                    If you have questions or comments about this
                                    Privacy Policy, please contact us at:{" "}
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

export default PrivacyPolicyPage;
