#!/bin/sh
echo "Copying files"
COMPRESSED_FOLDER=~/workspace/uiCompressed
SOURCE_FOLDER=~/workspace/UiDemo
TOOLS=~/Platypus/bin/Tools.jar
cp -r $SOURCE_FOLDER/META-INF $COMPRESSED_FOLDER/
cp -r $SOURCE_FOLDER/WEB-INF $COMPRESSED_FOLDER/
cp -r $SOURCE_FOLDER/web $COMPRESSED_FOLDER/
cp -r $SOURCE_FOLDER/pub $COMPRESSED_FOLDER/
cp $SOURCE_FOLDER/* $COMPRESSED_FOLDER/

echo "Running require.js optimizer"
r.js -o build.js

echo "Minify"
java -jar $TOOLS -minify -app-folder $SOURCE_FOLDER/app/StandardWidgets -processed-folder $SOURCE_FOLDER/app/StandardWidgets -minified-models $COMPRESSED_FOLDER/app/StandardWidgets/Modules.model -minified-layouts $COMPRESSED_FOLDER/app/StandardWidgets/Modules.layout
java -jar $TOOLS -minify -app-folder $SOURCE_FOLDER/app/ModelWidgets -processed-folder $SOURCE_FOLDER/app/ModelWidgets -minified-models $COMPRESSED_FOLDER/app/ModelWidgets/Modules.model -minified-layouts $COMPRESSED_FOLDER/app/ModelWidgets/Modules.layout
java -jar $TOOLS -minify -app-folder $SOURCE_FOLDER/app/ModelGrid -processed-folder $SOURCE_FOLDER/app/ModelGrid -minified-models $COMPRESSED_FOLDER/app/ModelGrid/Modules.model -minified-layouts $COMPRESSED_FOLDER/app/ModelGrid/Modules.layout
java -jar $TOOLS -minify -app-folder $SOURCE_FOLDER/app/MenuWidgets -processed-folder $SOURCE_FOLDER/app/MenuWidgets -minified-models $COMPRESSED_FOLDER/app/MenuWidgets/Modules.model -minified-layouts $COMPRESSED_FOLDER/app/MenuWidgets/Modules.layout
java -jar $TOOLS -minify -app-folder $SOURCE_FOLDER/app/ContainerPanels -processed-folder $SOURCE_FOLDER/app/ContainerPanels -minified-models $COMPRESSED_FOLDER/app/ContainerPanels/Modules.model -minified-layouts $COMPRESSED_FOLDER/app/ContainerPanels/Modules.layout
java -jar $TOOLS -minify -app-folder $SOURCE_FOLDER/app/Utils -processed-folder $SOURCE_FOLDER/app/Utils -minified-models $COMPRESSED_FOLDER/app/Utils/Modules.model -minified-layouts $COMPRESSED_FOLDER/app/Utils/Modules.layout

java -jar $TOOLS -force -minify -app-folder $SOURCE_FOLDER/app/ -processed-file $SOURCE_FOLDER/app/MainView.layout -minified-layouts $COMPRESSED_FOLDER/app/MainView.layout
java -jar $TOOLS -force -minify -app-folder $SOURCE_FOLDER/app/ -processed-file $SOURCE_FOLDER/app/MainView.model -minified-models $COMPRESSED_FOLDER/app/MainView.model 

echo "Remove unnecessary"
rm -r $COMPRESSED_FOLDER/app/Demos.*
find $COMPRESSED_FOLDER/app/StandardWidgets -type f -not -name 'Modules.*' -delete
find $COMPRESSED_FOLDER/app/ModelWidgets -type f -not -name 'Modules.*' -delete
find $COMPRESSED_FOLDER/app/ModelGrid -type f -not -name 'Modules.*' -delete
find $COMPRESSED_FOLDER/app/MenuWidgets -type f -not -name 'Modules.*' -delete
find $COMPRESSED_FOLDER/app/ContainerPanels -type f -not -name 'Modules.*' -delete
find $COMPRESSED_FOLDER/app/Utils -type f -not -name 'Modules.*' -delete
echo "Creating index"
java -jar $TOOLS -index -app-folder $COMPRESSED_FOLDER/app/ -processed-folder $COMPRESSED_FOLDER/app/ -indexed-modules $COMPRESSED_FOLDER/app/Modules.js
echo 'Now you should add init="Modules.js" nearby  source-path="app" in application-start.html'

