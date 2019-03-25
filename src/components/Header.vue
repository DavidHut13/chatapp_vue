<template>
    <div>
        <b-navbar toggleable="lg"  variant="info" clas="Navbar">
            <b-navbar-brand class="brandName" to="/Home">Chatter <i class="far fa-comment fa-2x"></i></b-navbar-brand>

            <b-navbar-toggle target="nav_collapse"/>

            <b-collapse is-nav id="nav_collapse">
            <b-navbar-nav>
                <b-nav-item to="/Home">Home</b-nav-item>
                <b-nav-item to="/Home/Chat">Chat</b-nav-item>
            </b-navbar-nav>
            <!-- Right aligned nav items -->
            </b-collapse>
        </b-navbar>
    </div>
</template>


<script >
export default {
    
}
</script>

<style scoped>

.brandName {
    font-family: 'Rock Salt', cursive;
}

.navbar.bg-info {
    background-image: linear-gradient(to right, #266ed8, #009aff, #00beea, #00d99f, #1feb28) !important;
}
a {
    color: white !important;
    font-size: 20px !important;
}
a:hover {
    color: #1feb28 !important;
    
}

.navbar-light .navbar-toggler {
   border-style: none !important;
}

</style>

