const fs = require('fs')
const yaml = require('js-yaml');

function readYamlFile(filepath){
    try{
        const doc = yaml.load(fs.readFileSync(filepath, 'utf8'));
        return doc
    } catch(error){
        console.log(error)
    }
}


function writeYamlFile(filepath, data){
    try{
        const yamlString = yaml.dump(data)
        fs.writeFileSync(filepath, yamlString)
    } catch(error){
        console.log(error)
    }
}


function main(){
    const data = readYamlFile('example.yaml')
    console.log(data)

    writeYamlFile('output.yaml', features)
    console.log("Write complete")
}

main()
