import React from 'react';
import View from '../containers/View/View';
import { faPeopleGroup } from '@fortawesome/free-solid-svg-icons';

function Teachers() {
    return (
        <View
            title="Profesores"
            icon={faPeopleGroup}
            description='Crea y modifica los profesores de tu escuela.'
        >

        </View>
    );
}

export default Teachers;