// Itinerary.jsx
import React from 'react';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const Itinerary = ({ itinerary }) => {
    return (
        <div className="itinerary">
            <h3>Itinerary</h3>
            {/* Displaying the itinerary using react tabs */}
            <Tabs>
                <TabList>
                    {itinerary.map(({ day }) => (
                        <Tab key={day}>Day {day}</Tab>
                    ))}
                </TabList>
                {itinerary.map(({ day, activities, accommodation, meals }) => (
                    <TabPanel key={day}>
                        <div className="tour-plan">
                            {activities.map(activity => (
                                <p key={activity}>{activity}</p>
                            ))}
                            <p>{accommodation}</p>
                            <p>Food : {meals}</p>
                        </div>
                    </TabPanel>
                ))}
            </Tabs>
        </div>
    );
};

export default Itinerary;
