import React from 'react';
import ContentHeader from "./ContentHeader.jsx";
import "../styles/content.css"
import Card from "./Card.jsx";
import TeacherList from "./TeacherList.jsx";

const Content = () => {
    return (
        <div className='content'>
            <ContentHeader />
            <Card />
            <TeacherList />
        </div>
    );
};

export default Content;
