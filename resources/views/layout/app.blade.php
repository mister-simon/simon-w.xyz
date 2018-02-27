@extends('layout.root')

@push('styles')
    <link rel="stylesheet" href="{{ mix('css/app.css') }}">
@endpush

@push('scripts')
    <script src="{{ mix('js/manifest.js') }}"></script>
    <script src="{{ mix('js/vendor.js') }}"></script>
    <script src="{{ mix('js/app.js') }}"></script>
@endpush

@section('head')
    @stack('meta')
    @stack('styles')
@endsection

@section('root-body')
    @yield('body')
    @stack('scripts')
@endsection