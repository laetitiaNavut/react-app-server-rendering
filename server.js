import fs from 'fs';
import path from 'path';
import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import ContactApp from './app/components/ContactApp';


const app = express();

app.set('views', './views');

app.set('view engine', 'ejs');

app.use(express.static(path.resolve(__dirname, '/static')));

const contacts = JSON.parse(fs.readFileSync(__dirname + '/public/contacts.json', 'utf8'));

const ContactAppFactory = React.createFactory(ContactApp);


app.get('/', (req, res) => {

	let componentInstance = ContactAppFactory({contacts:contacts});

	res.render('index', {reactInitialData: JSON.stringify(contacts), content: renderToString(componentInstance)});
});

app.listen(3000, ()=> {
	console.log('Express app listening on port 3000');
})