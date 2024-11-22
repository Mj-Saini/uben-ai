"use client";
import { useEffect } from "react";
import WeStarted from "../components/WeStarted";
import AOS from "aos";

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 300, // Animation duration
      once: true, // Whether animation should happen only once
    });
  }, []);
  return (
    <div className="pt-12 md:mt-16">
      <div className="container max-w-[1360px] mx-auto px-5 md:px-10 pb-12">
        <div className="w-full md:w-10/12 xl:w-[60%] mx-auto">
          <h2 className=" ff_general_medium text-xs md:text-base text-[#fa421d] pb-2">Terms</h2>
          <h2  data-aos="fade-up" className="ff_general_semibold text-[32px] md:text-[40px] text-black font-semibold animate-bottom
animate-bottom">
            End User License Agreement
          </h2>
          <h4  className=" lg:text-base text-sm ff_general_semibold  text-black font-bold pt-5  ">
            Effective Date: July 21, 2024
          </h4>
          <p  className=" lg:text-base sm:text-sm text-black font-normal leading-normal ">
            This End User License Agreement (“Agreement”) governs your use of
            Üben AI (“Application”), created by Uben AI Company. By downloading,
            installing, or using this Application, you agree to be bound by the
            terms of this Agreement. If you do not agree with these terms, do
            not download, install, or use the Application.
          </p>
          <h4  className=" lg:text-base ff_general_bold text-sm  text-black font-bold  ">
            1. License
          </h4>
          <p  className=" lg:text-base sm:text-sm text-black font-normal leading-normal ">
            Uben AI grants you a revocable, non-exclusive, non-transferable,
            limited license to download, install, and use the Application solely
            for your personal, non-commercial purposes strictly in accordance
            with the terms of this Agreement.
          </p>
          <h4  className="lg:text-base ff_general_bold text-sm  text-black">
            2. Restrictions
          </h4>
          <p  className=" lg:text-base sm:text-sm text-black font-normal leading-normal ">
            You agree not to, and you will not permit others to: a. License,
            sell, rent, lease, assign, distribute, transmit, host, outsource,
            disclose, or otherwise commercially exploit the Application or make
            the Application available to any third party. b. Modify, make
            derivative works of, disassemble, decrypt, reverse compile, or
            reverse engineer any part of the Application. c. Remove, alter, or
            obscure any proprietary notice (including copyright and trademark
            notices) of Uben AI and its affiliates.
          </p>
          <h4  className="lg:text-base text-sm ff_general_bold text-black font-bold  ">
            3. Intellectual Property
          </h4>
          <p  className=" lg:text-base sm:text-sm text-black font-normal leading-normal ">
            The Application and its contents, features, and functionality are
            and will remain the exclusive property of Uben AI and its licensors.
            The visual interfaces, graphics, design, compilation, information,
            data, computer code, products, software, services, and all other
            elements of the Application (“Materials”) provided by Uben AI are
            protected by intellectual property and other laws. All Materials
            included in the Application are the property of Uben AI or its
            third-party licensors..
          </p>
          <h4  className="lg:text-base text-sm ff_general_bold  text-black font-bold  ">
            4. Your Content
          </h4>
          <p  className=" lg:text-base sm:text-sm text-black font-normal leading-normal ">
            The Application allows you to input, upload, store, or send
            information and data (“Your Content”). You retain all rights in and
            are solely responsible for, the legality, reliability, and
            appropriateness of Your Content.
          </p>
          <h4  className="lg:text-base text-sm ff_general_bold  text-black font-bold  ">
            5. Privacy Policy
          </h4>
          <p  className=" lg:text-base sm:text-sm text-black font-normal leading-normal ">
            Uben AI is committed to protecting your privacy. Please refer to our
            Privacy Policy, which explains how we collect, use, and disclose
            information that pertains to your privacy. By using the Application,
            you agree to the collection and use of information in accordance
            with our Privacy Policy.
          </p>
          <h4  className="lg:text-base text-sm ff_general_bold  text-black font-bold  ">
            6. Updates and Changes
          </h4>
          <p  className=" lg:text-base sm:text-sm text-black font-normal leading-normal ">
            Uben AI reserves the right to modify, suspend, or discontinue,
            temporarily or permanently, the Application or any service to which
            it connects, with or without notice and without liability to you.
          </p>
          <h4  className="lg:text-base text-sm ff_general_bold  text-black font-bold  ">
            7. Termination
          </h4>
          <p  className=" lg:text-base sm:text-sm text-black font-normal leading-normal ">
            This Agreement is effective until terminated by you or Uben AI. Uben
            AI may, in its sole discretion, at any time and for any or no
            reason, suspend or terminate this Agreement with immediate effect.
          </p>
          <h4  className="lg:text-base text-sm ff_general_bold  text-black font-bold  ">
            8. Governing Law
          </h4>
          <p  className=" lg:text-base sm:text-sm text-black font-normal leading-normal ">
            This Agreement will be governed by and interpreted according to the
            laws of Delaware, without regard to its conflict of laws principles.
          </p>
          <h4  className="lg:text-base text-sm ff_general_bold  text-black font-bold  ">
            9. Contact Information
          </h4>
          <p  className=" lg:text-base sm:text-sm text-black font-normal leading-normal ">
            If you have any questions about this Agreement, please contact us at
            help@ubenai.com.
          </p>
          <h4  className="lg:text-base text-sm ff_general_bold  text-black font-bold  ">
            10. Severability
          </h4>
          <p  className=" lg:text-base sm:text-sm text-black font-normal leading-normal ">
            If any provision of this Agreement is held to be unenforceable or
            invalid, such provision will be changed and interpreted to
            accomplish the objectives of such provision to the greatest extent
            possible under applicable law and the remaining provisions will
            continue in full force and effect. This template provides a
            foundation for your EULA, but ensure it aligns with your specific
            app features and legal requirements.
          </p>
        </div>
      </div>

      {/* Get Started */}

      <WeStarted />
    </div>
  );
}
