css is cascading style sheet
css 3 type
inline css -- that is dangerous code
internal css -- that is fine
external css -- best way
style --  
 key:value;
key1:value1;
key1:value1;

<h1 style='background-color:tomato;color:white'>Heading<h1>

<head>
    <style>
        .heading-1{
            background-color:tomato;
            color:white
        }
        #heading-1{
            background-color:tomato;
            color:white
        }
    </style>
</head>

How to define a class,id--

<h1 class="heading-1">Heading1<h1>
<h1 id="heading-1">Heading1<h1>
Class should be denoted from .
'id' should be denoted from #
We can add multiple classes in a document
We can use unique id in a document

<head>
    <link>
</head>
what is box model
    ---margin, top,right,bottom,left
        12px 12px 12px 12px;
        12px;
        12px 10px; (top,bottom - 12px , right ,left 10px)
    ---border, top,right,bottom,left
        border : 1px solid #000;
    ---padding, top,right,bottom,left
        12px 12px 12px 12px;
        12px;
        12px 10px; (top,bottom - 12px , right ,left 10px)
    ---content

    margin-top:10px
    margin-bottom:10px
    margin-right:0px
    margin-left:0px
