import { motion } from "framer-motion"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import style from "./Subscribe.module.css"

const Subscribe = () => {

  return (
    <>
      <p className={style.bartext}>This page is a mock-up</p>
      <div className={style.subscribe}>
        <Card className={style.card}>
          <motion.p
            className={style.maintext}
            whileHover={{ scale: 1.2 }}
          >
            <p className={style.text}> Light</p>
          </motion.p>
          <Card.Body>

            <Card.Title>50kr</Card.Title>
            <Card.Text>
              With supporting text below as a natural lead-in to additional content.
            </Card.Text>
            <Button variant="primary">Subscribe</Button>
          </Card.Body>
        </Card>
        <Card className={style.card}>
          <motion.p
            className={style.maintext}
            whileHover={{ scale: 1.2 }}
          >
            <p className={style.text}>Standard</p>
          </motion.p>

          <Card.Body>
            <Card.Title>100kr </Card.Title>
            <Card.Text>
              With supporting text below as a natural lead-in to additional content.
            </Card.Text>
            <Button variant="primary">Subscribe</Button>
          </Card.Body>
        </Card>
        <Card className={style.card}>
          <motion.p
            className={style.maintext}
            whileHover={{ scale: 1.2 }}
          >
            <p className={style.text}>Premium</p>
          </motion.p>

          <Card.Body>
            <Card.Title>10,000kr</Card.Title>
            <Card.Text>
              With supporting text below as a natural lead-in to additional content.
            </Card.Text>
            <Button variant="primary">Subscribe</Button>
          </Card.Body>
        </Card>
      </div>
    </>
  )
}
export default Subscribe