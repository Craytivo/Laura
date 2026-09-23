import React, { Component, type ErrorInfo, type ReactNode } from "react";

interface Props { children: ReactNode }
interface State { hasError: boolean }

export class ErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false };

  static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error("RU Sugaring application error", error, info.componentStack);
  }

  render() {
    if (this.state.hasError) {
      return <main className="error-state" role="alert">
        <p className="eyebrow">RU SUGARING</p>
        <h1>Something went wrong.</h1>
        <p>Please refresh the page and try again.</p>
        <button className="button button-dark" onClick={() => window.location.reload()}>
          Refresh page
        </button>
      </main>;
    }

    return this.props.children;
  }
}
