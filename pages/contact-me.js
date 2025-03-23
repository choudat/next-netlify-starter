import Head from "next/head";
import Header from "@components/Header";
import Footer from "@components/Footer";
import styles from "../styles/Home.module.css";

export default function ContactMe() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Contact Me - ConnEthics</title>
      </Head>
      <main
        className={styles.main}
        style={{ height: "calc(100vh - 50px)", overflow: "hidden" }}
      >
        <Header title="Contact Me" />
        <div
          className={styles.content}
          style={{ width: "100%", height: "100%" }}
        >
          <h1 style={{ margin: "1rem 0" }}>Schedule a Meeting</h1>
          <div
            className={styles.calendar}
            style={{
              width: "100%",
              height: "calc(100% - 50px)",
              overflow: "hidden",
            }}
          >
            <iframe
              src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ0l5WA0HeU0A-36V1FFPVDqISUjlzW_2f-A1-7-NCDY90uGr2M_RT3BtVmH2K_1gHhmaEI_gQrv?gv=true"
              style={{
                width: "100%",
                height: "100%",
                border: "none",
                overflow: "hidden",
              }}
            />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
