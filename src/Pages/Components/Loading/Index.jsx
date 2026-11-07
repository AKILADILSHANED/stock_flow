import React from 'react';

const Loading = ({
    message = 'Loading...',
    size = 'md',
    fullScreen = true,
    showMessage = true
}) => {
    const sizes = {
        sm: { spinner: 'w-8 h-8', text: 'text-sm', gap: 'gap-3' },
        md: { spinner: 'w-12 h-12', text: 'text-base', gap: 'gap-4' },
        lg: { spinner: 'w-16 h-16', text: 'text-lg', gap: 'gap-5' },
    };

    const currentSize = sizes[size] || sizes.md;

    const content = (
        <div className={`flex flex-col items-center justify-center ${currentSize.gap}`}>
            {/* Spinner container with layered rings */}
            <div className="relative">
                {/* Outer static ring */}
                <div
                    className={`${currentSize.spinner} rounded-full border-4 border-blue-100`}
                />
                {/* Inner spinning gradient ring */}
                <div
                    className={`absolute inset-0 ${currentSize.spinner} rounded-full border-4 border-transparent border-t-orange-600 border-r-orange-500 animate-spin`}
                />
                {/* Subtle pulsing dot in center */}
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-2 h-2 bg-orange-600 rounded-full animate-pulse" />
                </div>
            </div>

            {/* Loading text with animated dots */}
            {showMessage && (
                <div className="flex items-center gap-1">
                    <p className={`${currentSize.text} font-medium text-gray-600`}>
                        {message}
                    </p>
                    <span className="flex gap-0.5">
                        <span className="w-1 h-1 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                        <span className="w-1 h-1 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                        <span className="w-1 h-1 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                    </span>
                </div>
            )}

            {/* Progress bar - subtle linear indicator */}
            <div className="w-40 h-1 bg-gray-100 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 rounded-full animate-loading-bar" />
            </div>
        </div>
    );

    if (fullScreen) {
        return (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/70 backdrop-blur-sm">
                <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-10">
                    {content}
                </div>
            </div>
        );
    }

    return (
        <div className="flex items-center justify-center w-full py-12">
            {content}
        </div>
    );
};

export default Loading;