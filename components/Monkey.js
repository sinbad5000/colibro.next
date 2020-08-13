import React from 'react'




function MonkeyTabs() {


    return (
        <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
            <Tab eventKey="description" title="Description">
                <p>sdfhsdghs</p>
            </Tab>
            <Tab eventKey="endangered" title="Endangered">
                <p>agasfh</p>
            </Tab>
            <Tab eventKey="how to help" title="How To Help" disabled>
                <p>sdfgsgf</p>
            </Tab>
        </Tabs>
    );
}

render(<MonkeyTabs />);