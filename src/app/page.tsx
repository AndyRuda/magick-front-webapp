"use client"
import React, { useEffect, useState } from "react";
import { Container, Row, Col } from 'react-bootstrap';
import useMouse from '@react-hook/mouse-position'
import { useRouter } from 'next/navigation';
import { getUserData } from './../services/User';
import { getCard } from './../services/Cards';
import Navbar from './../components/navbar';
import Sidebar from './../components/sidebar';
import Table from './../components/table';
import { useWindowWidth } from '@react-hook/window-size'

import type { RootState } from '../redux/store'

import { useSelector, useDispatch } from 'react-redux'
import { changeName, cleanName } from './../redux/slice/cardSlice'
import { collectGenerateParams } from "next/dist/build/utils";


export default function Page(): JSX.Element {
  const router = useRouter();
  const [showSidebar, setShowSidebar] = useState(false);
  const ref = React.useRef(null);
  const mouse = useMouse(ref, {
    enterDelay: 800,
    leaveDelay: 800,
  });
  const onlyWidth = useWindowWidth()

  const name = useSelector( (state: RootState) => state.card.name)

  useEffect(() => {
    try {
      getUserData().then(data => {
        console.log(data)
        return data
      })

    } catch (error) {
      console.log(error)
      router.push('/login')
    }
  }, [])
  useEffect(() => {
    if (
      mouse.screenX &&
      mouse.screenX >= onlyWidth - (onlyWidth * 0.3)
    ) {
      setShowSidebar(true)
    }
    else {
      if(
        mouse.screenX &&
        mouse.screenX < onlyWidth - onlyWidth * 0.18
      ) {
        setShowSidebar(false)
      }
    }
  }, [mouse])

  return (
    <>
      <Navbar style={{ height: '10vh' }}></Navbar>
      <Container style={{ height: '90vh' }} fluid ref={ref}>
        <Row>
          <Col xs={showSidebar ? 10 : 12} className={showSidebar ? "pe-0" : ""} >
            <Table></Table>
          </Col>
          {showSidebar && (
            <Col xs={showSidebar ? 2 : 0} className="px-0">
              <Sidebar></Sidebar>
            </Col>
          )}
        </Row>
      </Container>
    </>
  )
}