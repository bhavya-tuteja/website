Bootstrap(50%-60%) code coverage
    html,css,javascript,jquery
    Layout
        Grid
        row,col

    components
        --- nav
        --- card
        --- accordion
        --- carousal
        --- tab bar
        --- modal
html + bootstrap boilerplate


1row
12/4 = 3col = col-3
<div class="row">
    <div class="col-sm-12 col-md-6 col-lg-3">
    </div>
    <div class="col-sm-12 col-md-6 col-lg-3">
    </div>
    <div class="col-sm-12 col-md-6 col-lg-3">
    </div>
    <div class="col-sm-12 col-md-6 col-lg-3">
    </div>
     <div class="col-sm-12 col-md-6 col-lg-3">
    </div>
</div>

breakpoints (xs,sm,md,lg,xl)
    small mobile --- col-xs-3
    mobile --- col-sm-3
    tablet --- col-md-3
    desktop --- col-lg-3
    projector --- col-xl-3

margin,padding
margin top-bottom-left-right;
m-0,m-5
margin top-bottom;
my-0,my-5
margin left-right;
mx-0,mx-5
margin left
ml-0,ml-5
margin right
mr-0,mr-5
margin top
mt-0,mt-5
margin bottom
mb-0,mb-5
margin auto
m-auto
mx-auto
my-auto


padding top-bottom-left-right;
p-0,p-5
padding top-bottom;
py-0,py-5
padding left-right;
px-0,px-5
padding left
pl-0,pl-5
padding right
pr-0,pr-5
padding top
pt-0,pt-5
padding bottom
pb-0,pb-5

background color
bg-primary      --- blue
bg-danger       --- red
bg-secondary    --- grey
bg-success      --- green
bg-warning      --- yellow
bg-light        --- white
bg-dark         --- black
bg-transparent  --- transparent
bg-info         --- skyblue

text color
text-primary      --- blue
text-danger       --- red
text-secondary    --- grey
text-success      --- green
text-warning      --- yellow
text-light        --- white
text-dark         --- black
text-transparent  --- transparent
text-info         --- skyblue
text-black        --- black
text-white        --- white
text-black-50     --- black
text-white-50     --- white
text-muted        --- light grey

border
border border-0,5
border border-primary      --- blue
border border-danger       --- red
border border-secondary    --- grey
border border-success      --- green
border border-warning      --- yellow
border border-light        --- white
border border-dark         --- black
border border-transparent  --- transparent
border border-info         --- skyblue

rounded
rounded rounded-0,3
rounded rounded-circle
rounded rounded-pill
rounded rounded-top
rounded rounded-bottom
rounded rounded-start
rounded rounded-end


display
d-flex  --- flex (d-xs-flex,d-sm-flex,d-lg-flex-d-xl-flex-d-xxl-flex)
d-none  --- hide the (element,tag) content
d-block --- show the (element,tag) content

flex-direction :row,col(flex-sm-row)
d-flex flex-row
d-flex flex-column

d-flex flex-lg-row flex-sm-column





only for mobile
d-none d-sm-block d-md-none
only for desktop
d-none d-lg-block d-xxl-none
only for tablet
d-none d-md-block d-lg-none



Justify content  for x-axis
d-flex justify-content-center(between,around,evenly)
d-flex justify-content-(sm,md,lg,xl,xxl)-center

Align Items  for y-axis
d-flex align-items-center(stretch,baseline,start)
d-flex align-items-(sm,md,lg,xl,xxl)-center

Align Self for specific content
align-self-start(stretch,baseline,start)
align-self-(sm,md,lg,xl,xxl)-center

Wrap content
d-flex flex-wrap
d-flex flex-(sm,md,lg,xl,xxl)-wrap

Order
order-0,5
order-(sm,md,xl,xxl)-0,5
Additionally there are also responsive .order-first and .order-last classes that change the order of an element by applying order: -1 and order: 6, respectively.

Text selection
user-select-(all,none)

Overflow
overflow-(auto,hidden,scroll)
Position
position-(static,absolute,relative,sticky,fixed)
(top,start,bottom,end)-0-50,100
translate-middle for center of the content

Shadows
shadow-(none,sm,lg)

Width
w-(25,50,75,100,auto)
Max-width
mw-100
Height
h-(25,50,75,100,auto)
Max-Height
mh-100

text alignment
text-(start,center,end,wrap,break,lowercase,uppercase,capitalize)
text-(sm,md,lg,xl,xxl)-(start,center,end)

font size
fs-(1,6)
font weight
fw-(bold,bolder,normal,light,lighter,italic,normal)

Line Height
lh-(1,sm,base,lg)

Text Decoration
text-decoration-(none,underline,line-through)

opacity,invisible,d-none
Visibility
visible,invisible
opacity-(0,5)