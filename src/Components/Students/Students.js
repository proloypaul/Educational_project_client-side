import React from 'react';
import AddReview from './AddReview/AddReview';
import Library from './Library/Library';
import StudentsHeader from './StudentsHeader/StudentsHeader';
import YourClasses from './YourClasses/YourClasses';

const Students = () => {
    return (
        <div>
            <StudentsHeader></StudentsHeader>
            <Library></Library>
            <AddReview></AddReview>
            <YourClasses></YourClasses>
           
        </div>
    );
};

export default Students;