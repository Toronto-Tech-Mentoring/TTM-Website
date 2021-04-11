import React from "react"
import ExpandingTextBox from "../ExpandingTextBox/ExpandingTextBox"
import TestimonialButton from "../Testmonial/Button/Button"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles(theme => ({
  divStyle: {
    backgroundColor: "#FFFFFF",
    minHeight: "600px",
    paddingBottom: "50px",
    marginLeft: "auto",
    marginRight: "auto",

    [theme.breakpoints.between("sm", "md")]: {
      paddingBottom: "50px",
    },
    [theme.breakpoints.between("xs", "sm")]: {
      paddingBottom: "50px",
    },
  },
  header: {
    fontFamily: "Josefin Sans",
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: "28px",
    lineHeight: "42px",
    color: "#000000",
    marginLeft: "16vw",
    marginTop: "166px",
    width: "94vw",
    [theme.breakpoints.between("sm", "md")]: {
      fontSize: "22px",
      lineHeight: "38px",

      width: "94vw",
      marginLeft: "5vw",
    },
    [theme.breakpoints.between("xs", "sm")]: {
      fontSize: "18px",
      lineHeight: "29px",
      width: "91vw",
      marginLeft: "5vw",
    },
  },
  text: {
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "18px",
    lineHeight: "27px",
    display: "flex",
    alignItems: "center",
    color: "#000000",
    marginBottom: "16px",
    width: "48vw",
    marginLeft: "16vw",

    [theme.breakpoints.between("sm", "md")]: {
      fontSize: "16px",
      width: "75vw",
      marginLeft: "5vw",
      marginBottom: "16px",
    },
    [theme.breakpoints.between("xs", "sm")]: {
      fontSize: "14px",
      width: "85vw",
      marginLeft: "5vw",
      lineHeight: "24px",
    },
  },
  button: {
    float: "Left",
    marginLeft: "2vw",
  },
  [theme.breakpoints.between("sm", "md")]: {
    float: "Left",
  },
}))

const Testmonials = () => {
  const classes = useStyles()
  return (
    <>
      <div className={classes.div}>
        <h2 className={classes.header}>
          Have you faced adversity and want to learn tech skills?
        </h2>
        <p className={classes.text}>
          If you are a person facing homelessness and housing precarity, we will
          work with you to give you the tech knowledge, skills and advice to
          help you achieve your personal, professional or entrepreneurial goals.
        </p>
        <ExpandingTextBox
          className={classes.textBox}
          mainText={
            " Tiana grew up in foster care. Since aging out of the system at 18 they no longer have access to the support they once had, and have faced prejudice and mistreatment from past shelters for being transgender. Like many others in this situation they have faced discriminination, trust and confidence issues which were significant barriers in pursuing education. Tiana loves photography and is curious about web design so when they heard about Toronto Tech Mentoring through a friend at their shelter, they contacted the TTM team to learn more. The program volunteers helped them to navigate their goals, understand their learning style, and customize a website project specifically for them that would allow them to gain hands on experience while learning the basics of web design. They really enjoyed it, and after completing their project, their mentors helped them explore web design as a career path."
          }
          name={"Tiana"}
        />
        <a href="how-it-works">
          <TestimonialButton
            buttonText={"Join our program"}
            className={classes.button}
          />
        </a>
      </div>
      <div className={classes.div}>
        <h2 className={classes.header}>
          Are you interested in mentoring someone or helping us run this
          program?
        </h2>
        <p className={classes.text}>
          We come from different backgrounds (not all tech!) and build
          collaborative and supportive environments. We are always looking for
          more dedicated individuals to join our team!
        </p>
        <ExpandingTextBox
          className={classes.textBox}
          mainText={
            "Enzo is a recent graduate with ambitions of being a Software Developer and getting his foot in the door in Toronto’s thriving tech industry. Since joining Toronto Tech Mentoring’s volunteer team, Enzo has been building his portfolio, developing his soft skills, and expanding his professional network through collaboration with other volunteer team members, including more senior developers, user researchers and other professionals —all while contributing to a cause he cares about!"
          }
          name={"Enzo"}
        />
        <a href="/volunteer/">
          <TestimonialButton
            buttonText={"Volunteer with us"}
            className={classes.button}
          />
        </a>
      </div>
      <div className={classes.div}>
        <h2 className={classes.header}>
          Are you part of an organization that works to help people who face
          adversity?
        </h2>
        <p className={classes.text}>
          Partnerships are essential to our services. We work with you to help
          give more opportunities to the people that you serve.
        </p>
        <ExpandingTextBox
          className={classes.textBox}
          mainText={
            "Rahim is an Executive Director at a transitional housing center in Toronto. He’s always open to hearing about opportunities that would benefit the community. He decided to partner with TTM, as it was a great skill development opportunity for residents and he had heard very positive things about the program from one of his social workers who was familiar with the success of the program. The partnership has allowed his organization to benefit from their participants having integrated access to this free program in a way that complements the existing supports within his organization. Rahim has seen an improvement in their participants' outlook and their excitement for learning."
          }
          name={"Rahim"}
        />
        <a href="/partners/">
          <TestimonialButton
            buttonText={"Partner with us"}
            className={classes.button}
          />
        </a>
      </div>
      <div className={classes.div}>
        <h2 className={classes.header}>
          Want to help us continue to provide this program, and expand our
          project?
        </h2>
        <p className={classes.text}>
          Your donation could help us provide tech skills to somebody who would
          not otherwise have the opportunity.
        </p>
        <ExpandingTextBox
          className={classes.textBox}
          mainText={
            "Sam works in communications at a tech company. She learned about Toronto Tech Mentoring through her friend who volunteers with us. Her company recently upgraded their computers, so she got in touch with our team to see if we could use their older computers. She coordinated with her IT Department to have the laptops wiped and then donated to our program. When her co-workers heard about what she had done, they loved it, and decided to come up with new ways to get involved. The next year, the company decided to continue support by donating extra software licenses. Sam’s actions directly empowered participants who did not have access to the needed technology to learn."
          }
          name={"Sam"}
        />
        <a href="/sponsors/">
          <TestimonialButton
            buttonText={"Sponsor us"}
            className={classes.button}
          />
        </a>
      </div>
    </>
  )
}

export default Testmonials
