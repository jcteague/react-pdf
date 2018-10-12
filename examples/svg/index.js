import React from 'react';
import ReactPDF, {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Font,
  Svg,
} from '../../dist/react-pdf.es.js';
const svgContent = `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" class="svg-triangle" width='100' height='100'><path d="M 95,50 5,95 5,5 z"/></svg>`; // eslint-disable-line
const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
  },
  pdf: {
    width: '60%',
    padding: 10,
    backgroundColor: 'grey',
  },
  svg: {
    width: '60%',
    padding: 10,
    backgroundColor: 'grey',
  },
  text: {
    width: '40%',
    backgroundColor: '#f0f0f0',
    paddingHorizontal: 50,
    paddingVertical: 30,
    fontFamily: 'Oswald',
    color: '#212121',
  },
});

Font.register(
  'https://fonts.gstatic.com/s/oswald/v13/Y_TKV6o8WovbUd3m_X9aAA.ttf',
  { family: 'Oswald' },
);
const doc = (
  <Document>
    <Page orientation="landscape" size="letter" style={styles.page}>
      <View style={{ flexDirection: 'column' }}>
        <Text>Hello Dave. Here is some text before the svg</Text>
        <Text>This is another line of text</Text>
        {/* when adding a svg using svg-to-pdf, the height and width was not set from the svg
            the workaround is to wrap the svg with a View component and set height and width there
        */}
        <View style={{ width: 100, height: 100 }}>
          <Svg content={svgContent} debug style={styles.svg} />
        </View>
        <Text>Hello Dave. Here is some text before the svg</Text>
      </View>
    </Page>
  </Document>
);

// Renders document and save it
ReactPDF.render(doc, `${__dirname}/output.pdf`);
