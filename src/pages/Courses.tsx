import { faChalkboardUser } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import View from "../containers/View/View";

interface CoursesProps {}

function Courses(props: CoursesProps) {
  return (
    <View
      title="Cursos"
      icon={faChalkboardUser}
      description="Crea y modifica las cursos de tu escuela."
    >
      <div></div>
    </View>
  );
}

export default Courses;
