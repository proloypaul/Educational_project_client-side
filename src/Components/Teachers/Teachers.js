import React from 'react';
import AddNotice from './AddNotice/AddNotice';
import Allteacher from './Allteacher/Allteacher';
import TeachersHeader from './TeachersHeader/TeachersHeader';

const Teachers = () => {
    return (
        <div>
            <TeachersHeader></TeachersHeader>
            <Allteacher></Allteacher>
            <AddNotice></AddNotice>
        </div>
    );
};

export default Teachers;