import React, { useState } from "react";
import { motion } from "motion/react"

function App(){
  return(
    <div className="h-[100vh] flex justify-center items-center">
       <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}  className="border-2 border-sky-400 bg-sky-400 h-14 w-40 rounded-3xl" />
    </div>
  )
}

export default App;